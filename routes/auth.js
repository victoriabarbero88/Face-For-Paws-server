const express = require("express");
const router = express.Router();
const createError = require("http.errors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/user");
const Shelter = require("../models/shelter");

//HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require("../helpers/middlewares");

//POST '/signup'
router.post(
  "/signup",
  //revisamos si hay currentUser con la función helper
  isNotLoggedIn(),
  //Revisa que se hayan completado los campos con la funcion helper
  validationLoggin(),

  async (req, res, next) => {
    //coge los datos del body
    const{ name, email, password } = req.body;
    
    try {
      //mira si existe email en la BD
      const emailExists = await User.findOne({email}, "email");
      //si el usuario existe envia un error
      if (emailExists) return next(createError(400));
      else {
        //en caso contrario si usuario no existe, haz el hash y crea nuevo user en DB
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPass = bcrypt.hashSync(password, salt);
        const newUser = await User.create({email, password: hashPass, name });
        //asignamos user a currentUser y enviamos la respuesta en json
        req.session.currentUser = newUser;
        res 
          .status(200)
          .json(newUser);
      }
    } catch(error) {
      next(error);
    }
  }
);


//POST '/login'

//comprueba si existe currentUser con la función helper
//y que el email y el password se estén enviando 
router.post(
  "/login",
  isNotLoggedIn(),
  validationLoggin(),

  async (req, res, next) => {
    //coge los datos del body
    const { email, password, isShelter } = req.body;

    //creamos la variable model para poder hablitar la opción de usar un modelo o el otro
    let model 

    //Miramos si en el body isShelter es true y pasamos el modelo de Shelter sino pasamos el módelo de User
    if(isShelter) {
      model = Shelter;
    }else{
      model = User;
    }

    try {
      //comprueba si el usuario existe en la DB
      const user = await model.findOne({email});
      //si el usuario no existe envia error
      if(!user) {
        next(createError(404));
      }
      //si el usuario existe, hace el hash del password y lo compara con el de la DB
      //logea el usuario creando un currentUser y devuelve JSON con los datos
      else if (bcrypt.compareSync(password, user.password)) {
        req.session.currentUser = user;
        //añadimos al currentUser el isShelter para que nos lo indique en el Frontend
        req.session.currentUser.isShelter = isShelter;
        return;
      } else {
        next(createError(401));
      }
    }catch (error) {
      next(error);
    }
  }
);

//POST '/logout'

//revisa si existe currentUser con la función helper y la destruimos
router.post("/logout", isLoggedIn(), (req, res, next) => {
  req.session.destroy();
  //setea el estado y envía respuesta
  res 
    .status(204)
    .send();
  return;
});


//GET '/private'

//revisa si hay un currentUser usando función helper y devuelve mensaje
router.get("/private", isLoggedIn(), (req, res, next) => {
  //setea el código de estado y devuelve un mensaje JSON
  res
    .status(200)
    .json({ message: "Test - User is logged in "});
});


//GET '/me'

//Comprueba si hay currentUser usando helper
router.get("/me", isLoggedIn(), ( req, res, next ) => {
  //si hay curretUser previene que el password sea enviado sin codificar y devuelve ub json con el currentUser
  req.session.currentUser.password = "*";
  res.json(req.session.currentUser);
});


module.exports = router;


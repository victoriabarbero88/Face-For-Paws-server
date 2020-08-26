const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/user");
const Shelter = require("../models/Shelter");

//HELPER FUNCTIONS
//traemos las funciones helpers
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require("../helpers/middlewares");

//POST '/signup'
router.post(
  //ponemos la ruta 
  "/signup",
  //Nos traemos la funcion helper para revisar si hay currentUser.
  isNotLoggedIn(),
  //Nos traemos la funcion helper para validar los datos introducidos.
  validationLoggin(),

  async (req, res, next) => {
    //recogemos los datos del body
    const{ name, email, password, isShelter } = req.body;
    console.log(isShelter)
    let model = isShelter ? Shelter : User;
    
    try {
      //mira si existe email en la BD
      const emailExists = await model.findOne({ email }, "email");
      //si el email existe envia un el error 400
      if (emailExists) return next(createError(400));
      else {
        //en caso contrario si usuario no existe, haz el hash y crea nuevo user en DB
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPass = bcrypt.hashSync(password, salt);
        const newUser = await model.create({ name, email, password: hashPass });
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
  //ponemos ruta
  "/login",

  //nos traemos los helpers
  isNotLoggedIn(),
  validationLoggin(),

  async (req, res, next) => {
    //coge los datos del body
    //const { email, password } = req.body;
    const { email, password, isShelter } = req.body;

    

    //creamos la variable model para poder hablitar la opción de usar un modelo o el otro
    let model = isShelter ? Shelter : User;
    //Miramos si en el body isShelter es true y pasamos el modelo de Shelter sino pasamos el módelo de User

    try {
      //comprueba si el usuario existe en la DB
      const user = await model.findOne({ email });
      //si el usuario no existe envia error
        //console.log(user);
        if(!user) {
          next(createError(404));
        }
      //si el usuario existe, hace el hash del password y lo compara con el de la DB
      //logea el usuario creando un currentUser y devuelve JSON con los datos
      else if (bcrypt.compareSync(password, user.password)) {
        
        req.session.currentUser = user;
        //añadimos al currentUser el isShelter para que nos lo indique en el Frontend
        //req.session.currentUser.isShelter = isShelter;
        res.json(user).status(201);
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
// router.post("/logout", isLoggedIn(), (req, res, next) => {
//   req.session.destroy();
//   //setea el estado y envía respuesta
//   res 
//     .status(204)
//     .send();
//   return;
// });
// router.post('/logout', isLoggedIn(), (req, res, next) => {
//   console.log(req.session.currentUser)
//   const { email } = req.session.currentUser;
//   req.session.destroy();
//   res
//     .status(200) 
//     .json({ "message": `User '${email}' logged out - session destroyed` });
//   return;
// });
// router.post('/logout', (req, res, next) => {
//   console.log(req.session.currentUser)
//   const { email } = req.session.currentUser;
//   req.session.destroy();
//   res
//     .status(200) 
//     .json({ "message": `User '${email}' logged out - session destroyed` });
//   return;
// });
router.post("/logout", isLoggedIn(), (req, res, next) => {
  req.session.destroy(()  =>{
    res
    .status(204) //  No Content
    .send();
  return;
  });
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


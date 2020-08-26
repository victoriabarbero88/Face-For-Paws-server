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

router.post(
  "/login",
  isNotLoggedIn(),
  validationLoggin(),
  async (req, res, next) => {
    const { email, password, isShleter } = req.body;
    let model = isShleter ? Shelter : User;
    try {
      const user = await model.findOne({ email });
      if (!user) {
        next(createError(404));
      } else if (bcrypt.compareSync(password, user.password)) {
        req.session.currentUser = user;

        res.json(user).status(201);
      } else {
        next(createError(401));
      }
    } catch (error) {
      next(error);
    }
  }
);

//POST '/signup'
router.post(
  "/signup",

  isNotLoggedIn(),
  validationLoggin(),

  async (req, res, next) => {
    const { name, email, password, isShelter } = req.body;
    console.log(isShelter);
    let model = isShelter ? Shelter : User;

    try {
      const emailExists = await model.findOne({ email }, "email");

      if (emailExists) return next(createError(400));
      else {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPass = bcrypt.hashSync(password, salt);
        const newUser = await model.create({ name, email, password: hashPass });

        req.session.currentUser = newUser;
        res.status(200).json(newUser);
      }
    } catch (error) {
      next(error);
    }
  }
);

//POST '/logout'

router.post("/logout", isLoggedIn(), (req, res, next) => {
  req.session.destroy(() => {
    res
      .status(204) //  No Content
      .send();
    return;
  });
});

//GET '/private'

router.get("/private", isLoggedIn(), (req, res, next) => {
  res.status(200).json({ message: "Test - User is logged in " });
});

//GET '/me'

router.get("/me", isLoggedIn(), (req, res, next) => {
  req.session.currentUser.password = "*";
  res.json(req.session.currentUser);
});

module.exports = router;

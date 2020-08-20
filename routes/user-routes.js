const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/user");
const Shelter = require("../models/shelter");
const Pet = require("../models/pet");
const Feed = require("../models/feed");




//Create a PET
router.post("/add-pet", (req, res, next) => {
  Pet.create({
    name: req.body.name,
    photos: req.body.photo,
    location: req.body.location,
    size: req.body.size,
    age: req.body.age,
    gender: req.body.gender,
    species: req.body.species,
    description: req.body.description,
    status: req.body.status
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  });
});


//GET all Pets
router.get("/pet", (req, res, next) => {
  Pet.find().populate('pet')
    .then(allThePets => {
      res.json(allThePets);
    })
    .catch(err => {
      res.json(err);
    })
});


module.exports = router;
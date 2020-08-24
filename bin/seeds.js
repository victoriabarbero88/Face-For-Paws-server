
require('dotenv').config();
const mongoose = require("mongoose");

const User = require("../models/user");
const Shelter = require("../models/Shelter");
const Pet = require("../models/Pet");
const Feed = require("../models/Feed");
const dbName = "faceForPaws";
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const DEFAULT_PASSWORD = "1234";

var petfinder = require("@petfinder/petfinder-js");
var client = new petfinder.Client({apiKey: "u6clyX7gpPWOcmH2fnOXZAaxGLyDkcVpdu8OuVAwuUFFVC7kcF", secret: "HjIhBKnUlq9BwSbsbOXGh6V396sasL8OUQ0zh346"});

const users = [
  {
    name: "Laura" ,
    email: "lmn@gmail.com",
    password: "1234",
    photo: "https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg",
    location: "Barcelona",
    description: "I'm a cat lover",
    myPets: [{name:"Coco", photo:" "}],
    state: ["Adopt", "Sponsor", "Foster Home", "Animal Watcher", "Dog Walker"],
    pet: [],
    myFavPets: [],
    message: [],
    feed: [],
  },
  {
    name: "Raúl",
    email: "rlmn@gmail.com",
    password: "1234",
    photo: "https://pbs.twimg.com/media/DJWhERJVYAE4e2_.jpg",
    location: "Girona",
    description: "Always with animals" ,
    myPets: [],
    state: ["Animal Watcher","Dog Walker"],
    pet: [],
    myFavPets: [],
    message: [],
    feed: [],
  },
  {
    name: "Jordi" ,
    email: "jordilts@gmail.com" ,
    password: "1234",
    photo: "https://i.pinimg.com/564x/16/1b/5c/161b5cc128954ecc258f76d069d7631b.jpg",
    location: "Barcelona",
    description: "",
    myPets: [{name:"Furi", photo: " "}],
    state: ["Foster Home"],
    pet: [],
    myFavPets: [],
    message: [],
    feed: [],
  },
  {
    name: "Clara" ,
    email: "clra@gmail.com",
    password: "1234",
    photo: "https://i.pinimg.com/474x/c8/86/72/c886720b5088f74e6907ec908ed14930.jpg",
    location: "Lleida" ,
    description: "Animals are my passion" ,
    myPets: [{name:"Maya", photo: " "}],
    state: ["Adopt", "Sponsor", "Foster Home", "Animal Watcher", "Dog Walker"],
    pet: [],
    myFavPets: [],
    message: [],
    feed: [],
  },
]

mongoose
.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  //creamos los usuarios
  const updatedUsers = users.map((user)=> {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(DEFAULT_PASSWORD, salt);
    user.password = hashedPassword;
    return user;
  })
  const pr = User.create(updatedUsers);
  //pasamos la promesa pendiente al sieguiente then, esperando a que se creen los usuarios
  return pr;
})
.then(createdUsers => {
  //console.log(client.organization)
  console.log("Users have been created", createdUsers.length);
  return client.animal.search({limit:30})
})
.then((response) => {
  const animals = response.data.animals;
  const listPets = [];
    animals.forEach((animal) => {
      let newPet = new Pet();
      newPet.name = animal.name;
      newPet.photo = animal.photos[0];
      newPet.size = animal.size;
      newPet.age = animal.age;
      newPet.gender = animal.gender;
      newPet.species = animal.species;
      newPet.shelterId = animal.organization_id;
      newPet.status;
      newPet.description;
      
     
      listPets.push(newPet);
      //console.log(listPets)
    })
    return Pet.create(listPets);
})
.then((createdPets) => {
  console.log(createdPets.length, " pets have been created");
  //console.log(client)
  // createdPets.forEach((pet) => {
  //   let oneShelter = client.organization.search({limit:50, organization_id: Pet.shelterId});
  //   console.log(oneShelter)
  //   listShelters.push(oneShelter);
  return client.organization.search({limit:10})

})

.then((response) => {
  //console.log('es esto!', response)
  const organizations = response.data.organizations;
  const listShelters = [];

    organizations.forEach( (organization) => {
      let newShelter = new Shelter();
      newShelter.name = organization.name;
      newShelter.email = organization.email;
      newShelter.photo = organization.photos[0];
      newShelter.location = organization.address.city;
      newShelter.phone = organization.phone;
      newShelter.website = organization.website;
      newShelter.petRelationId = organization.id;
      newShelter.description;

      listShelters.push(newShelter);
      //console.log(listShelters);
  })
  return Shelter.create(listShelters)
})
.then((createdShelters) => {
  console.log(createdShelters.length + " shelters have been created");
})

.then(() => {
  mongoose.connection.close();
})
.catch((err) => {
  console.log(err);
});

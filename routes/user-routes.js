const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/user");
const Shelter = require("../models/Shelter");
const Pet = require("../models/Pet");
const Feed = require("../models/Feed");
const Message = require("../models/Message");
const { isLoggedIn } = require("../helpers/middlewares");



//GET '/feed'
router.get("/feed", (req, res, next) => {
  Feed.find()
    .then(allTheFeeds => {
      res.json(allTheFeeds).status(200);
    })
    .catch(err => {
      res.json(err).status(500);
    })
});

//GET '/message'
router.get("/message", (req, res, next) => {
  Message.find()
    .then(allTheMessages => {
      res.json(allTheMessages).status(200);
    })
    .catch(err => {
      res.json(err).status(500);
    })
});



//POST '/feed/add-feed'
router.post("/feed/add-feed", (req, res, next) => {
  const { title, name, photo, description, isShelter } = req.body;
  //let model = isShelter ? Shelter : User;
  console.log(req.body)
  const user = req.session.currentUser._id;
  Feed.create({
    user,
    title,
    name,
    photo,
    description,
  })
  .then(response => {
    
    if (req.session.currentUser.isShelter) {

      Shelter.findByIdAndUpdate(user, {$push: {feed: response._id}}, {new: true})
        .then((response) => {
          res.json(response).status(200);
        })
        .catch(err => {
          res.json(err).status(500);;
        })
    } else {
      User.findByIdAndUpdate(user, {$push: {feed: response._id}}, {new: true})
        .then((response) => {
          res.json(response).status(200);
        })
        .catch(err => {
          res.json(err).status(500);;
        }) 
  }})
  .catch(err => {
    res.json(err).status(500);;
  })
})
//POST '/message/add-message'
router.post("/message/add-message", (req, res, next) => {
  const { title, name, photo, description, isShelter } = req.body;
  //let model = isShelter ? Shelter : User;
  //console.log(req.body)
  const user = req.session.currentUser._id;
  Message.create({
    user,
    title,
    name,
    photo,
    description,
  })
  .then(response => {
    
    if (req.session.currentUser.isShelter) {

      Shelter.findByIdAndUpdate(user, {$push: {message: response._id}}, {new: true})
        .then((response) => {
          res.json(response).status(200);
        })
        .catch(err => {
          res.json(err).status(500);;
        })
    } else {
      User.findByIdAndUpdate(user, {$push: {message: response._id}}, {new: true})
        .then((response) => {
          res.json(response).status(200);
        })
        .catch(err => {
          res.json(err).status(500);;
        }) 
  }})
  .catch(err => {
    res.json(err).status(500);;
  })
})



//GET '/feed/:id'
router.get('/feed/:id', (req, res, next) => {
  Feed.findById(req.params.id)
    .then(theFeed => {
      res.status(200).json(theFeed);
    })
    .catch(err => {
      res.json(err).status(500);;
    })
}
)

//GET '/message/:id'
router.get('/message/:id', (req, res, next) => {
  Message.findById(req.params.id)
    .then(theMessage => {
      res.status(200).json(theMessage);
    })
    .catch(err => {
      res.json(err).status(500);;
    })
}
)

//GET '/pet' all Pets
router.get("/pet", (req, res, next) => {
  
  Pet.find()
    .then(allThePets => {
      res.json(allThePets).status(200);
    })
    .catch(err => {
      res.json(err).status(500);
    })
});

//GET '/shelter' all Shelters
router.get("/shelter", (req, res, next) => {
  
  Shelter.find()
    .then(allTheShelters => {
      res.json(allTheShelters).status(200);
    })
    .catch(err => {
      res.json(err).status(500);
    })
});

//GET '/user' all Users
router.get("/user", (req, res, next) => {
  
  User.find()

    .then(allTheUsers => {
      res.json(allTheUsers).status(200);
    })
    .catch(err => {
      res.json(err).status(500);
    })
});

//GET '/pet/:id'
router.get('/pet/:id', (req, res, next) => {
  //console.log(req.params.id);
  Pet.findById(req.params.id)
    .then(thePet => {
      res.status(200).json(thePet);
    })
    .catch(err => {
      res.json(err).status(500);
    })
}
)

//GET '/shelter/:id'
router.get('/shelter/:id', (req, res, next) => {

  Shelter.findById(req.params.id)
    .populate("pets")
    .then(theShelter => {
      res.status(200).json(theShelter);
    })
    .catch(err => {
      res.json(err).status(500);
    })
  }
)


//GET '/user/:id'
router.get('/user/:id', (req, res, next) => {

  User.findById(req.params.id)
    .then(theUser => {
      res.status(200).json(theUser);
    })
    .catch(err => {
      res.json(err).status(500);
    })
  } 
)

//GET '/profile'
router.get('/profile', isLoggedIn(), (req, res, next) => {
  const { isShelter } = req.session.currentUser;
  const user = req.session.currentUser._id;
  //console.log(typeof user)
  
  if (isShelter) {
    //console.log(isShelter)
    Shelter.findById(user)
      .populate("feed")
      .populate("pets")
      .then(theShelter => {
        //console.log('the shelter', theShelter)
        res.status(200).json(theShelter);
      })
      .catch(err => {
        res.status(500).json(err);
      })    
  } else {
    User.findById(user)
      .populate("feed")
      .then(theUser => {
        //console.log(theUser)
        res.status(200).json(theUser);
      })
      .catch(err => {
        res.status(500).json(err);
      })    
}})


//POST '/profile/edit/'
router.post("/profile/edit-profile", (req, res, next) => {
  const { name, location, phone, website, photo, description, isShelter } = req.body;
  let model = isShelter ? Shelter : User;
  const user = req.session.currentUser._id;

  
  model.findByIdAndUpdate(user, {name, location, phone, website, photo, description }, {new: true})
    .then((response) => {
        res.json(response).status(200);
    })
  
  .catch(err => {
    res.json(err).status(500);
  });
});



//POST '/pet/add-pet'
router.post("/pet/add-pet", (req, res, next) => {
  const { name, photo, location, size, age, gender, species, status, description} = req.body;
  console.log('esteeee', req.body)
  const user = req.session.currentUser._id;
  Pet.create({ 
    user,
    location,
    name,
    photo,
    size, 
    age,
    gender, 
    species,
    status,
    description,
  })
  .then(response => {
    Shelter.findByIdAndUpdate(user, {$push: {pets: response}}, {new: true})
      .then((response) => {
        res.json(response).status(200);
      })
  })
  .catch(err => {
    res.json(err).status(500);
  });
});


//POST '/pet/edit-pet/:id'
router.put("/pet/edit-pet/:id", (req, res, next) => {
  //const { name, photo, location, size, age, gender, species, status, description}  = req.body;
  console.log(req.params)
  Pet.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((response) => {
        res.status(200).json(response);
    })
  
  .catch(err => {
    res.json(err).status(500);
  });
});

//POST '/user/edit-user/:id'
router.put("/user/edit-user/:id", (req, res, next) => {
  //const { name, photo, location, size, age, gender, species, status, description}  = req.body;
  console.log(req.params)
  User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((response) => {
        res.status(200).json(response);
    })
  
  .catch(err => {
    res.json(err).status(500);
  });
});

//POST '/shelter/edit-shelter/:id'
router.put("/shelter/edit-shelter/:id", (req, res, next) => {
  //const { name, photo, location, size, age, gender, species, status, description}  = req.body;
  //console.log(req.params)
  Shelter.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((response) => {
        res.status(200).json(response);
    })
  
  .catch(err => {
    res.json(err).status(500);
  });
});

//POST '/feed/edit-feed/:id'
router.put("/feed/edit-feed/:id", (req, res, next) => {

  Feed.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((response) => {
        res.status(200).json(response);
    })
  
  .catch(err => {
    res.json(err).status(500);
  });
});

//POST '/message/edit-message/:id'
router.put("/message/edit-message/:id", (req, res, next) => {

  Message.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((response) => {
        res.status(200).json(response);
    })
  
  .catch(err => {
    res.json(err).status(500);
  });
});



//DELETE '/pet/delete/:id'
router.delete("/pet/delete/:id", (req, res, next) => {

  Pet.findByIdAndDelete(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })

    .catch(err => {
    res.json(err).status(500);
  });
})

//DELETE '/feed/delete/:id'
router.delete("/feed/delete/:id", (req, res, next) => {

  Feed.findByIdAndDelete(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })

    .catch(err => {
    res.json(err).status(500);
  });
})

//DELETE '/message/delete/:id'
router.delete("/message/delete/:id", (req, res, next) => {

  Message.findByIdAndDelete(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })

    .catch(err => {
    res.json(err).status(500);
  });
})



module.exports = router;
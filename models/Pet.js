const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: {type: String},
  photo: [{type: Object, default: "https://i.pinimg.com/564x/2c/2e/89/2c2e89b96800ff51b1187fa7409d5bd3.jpg"}],
  location: {type: String, enum:["Barcelona", "Girona", "Tarragona", "Lleida"]},
  size: {type: String},
  age: {type: String},
  gender: {type:String, enum:["Female", "Male"]},
  species: {type: String, enum:["Dog", "Cat", "Bird", "Hamster", "Rabit", "Ferret", "Other"]},
  description: {type: String},
  status: {type: String, enum: ["Adoptable", "Adopted", "Foster"]},
  shelterId: {type: String},
  shelter: {type: mongoose.Types.ObjectId, ref:"Shelter"},
  user: {type: mongoose.Types.ObjectId, ref:"User"},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
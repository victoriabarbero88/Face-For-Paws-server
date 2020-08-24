const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: {type: String},
  photo: [{type: Object}],
  location: {type: String, enum:["Barcelona", "Girona", "Tarragona", "Lleida"]},
  size: {type: String},
  age: {type: String},
  gender: {type:String},
  species: {type: String},
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
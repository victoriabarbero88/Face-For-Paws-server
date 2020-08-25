const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shelterSchema = new Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  photo: {type: Array, default:"https://i.pinimg.com/564x/2c/2e/89/2c2e89b96800ff51b1187fa7409d5bd3.jpg"},
  location: {type: String},
  phone: {type: String},
  website: {type: String},
  description: {type: String},
  isShelter: {type: Boolean, default: true},
  petId: {type: String},
  pets: [{type: mongoose.Types.ObjectId, ref:"Pet"}],
  user: [{type: mongoose.Types.ObjectId, ref:"User"}],
  message: [{}],
  feed: [{type: mongoose.Types.ObjectId, ref:"Feed"}],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Shelter = mongoose.model('Shelter', shelterSchema);

module.exports = Shelter;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedSchema = new Schema({
  user: {type: mongoose.Types.ObjectId, ref:"User"},
  shelter: {type: mongoose.Types.ObjectId, ref:"Shelter"},
  title: {type: String},
  name: {type: String},
  photo: {type: String, default:""},
  description: {type: String},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Feed = mongoose.model('Feed', feedSchema);

module.exports = Feed;
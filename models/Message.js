const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  user: {type: mongoose.Types.ObjectId, ref:"User"},
  shelter: {type: mongoose.Types.ObjectId, ref:"Shelter"},
  title: {type: String},
  name: {type: String},
  photo: {type: String, default: "https://i.pinimg.com/564x/2c/2e/89/2c2e89b96800ff51b1187fa7409d5bd3.jpg"},
  description: {type: String},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
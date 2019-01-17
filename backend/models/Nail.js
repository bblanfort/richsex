const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NailSchema = new Schema({
  nailName: { type: String, required: true },
  nailCategory: { type: String, required: true },
  description: { type: String },
  createdDate: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  username: { type: String },
});
module.exports = mongoose.model('Nail', NailSchema);

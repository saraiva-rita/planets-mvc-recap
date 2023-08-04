const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planetSchema = new Schema({
  /* Your Code Goes Here ... */
  name: { type: String },
  image: { type: String },
  velocity: { type: Number },
  distance: { type: Number },
  description: { type: String },
});

const Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;

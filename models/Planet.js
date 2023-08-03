const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planetSchema = new Schema({
    /* Your Code Goes Here ... */
}); 

const Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;

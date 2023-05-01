const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = new Schema({
      name: String,
      // img: {type: String},
      // createdAt: {type: Date, default: Date.now},
      // updatedAt: {type: Date, default: Date.now},
});

// console.log(Course);

module.exports = mongoose.model('Person', Person);
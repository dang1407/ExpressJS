const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
      _id: Object,
      name: String,
      description: String,
      // img: {type: String},
      // createdAt: {type: Date, default: Date.now},
      // updatedAt: {type: Date, default: Date.now},
}, {collection: 'Course'});

// console.log(Course);

module.exports = mongoose.model('Course', Course);
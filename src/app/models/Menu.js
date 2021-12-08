const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Menu = new Schema({
  name: {
    type: String,
    minLength: 6,
    required: 'Name is required',
  },
  parent_id: {
    type: Number,
    minLength: 6,
    required: 'title is required',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Menu', Menu);

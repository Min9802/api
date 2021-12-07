const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Post = new Schema({
    name: { 
        type: String,
         minLength:6,
         required: 'Name is required',
    },
    title: {  
        type: String,
         minLength:6,
         required: 'title is required',
    },
    content: {
        type: String,
         minLength:6,
         required: 'title is required',
    },
    category_id: {
        type: String,
        required: 'title is required',
    },
    createdAt: { 
        type: Date, 
        default: Date.now
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
});

module.exports = mongoose.model('Post', Post);

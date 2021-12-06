const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Admin = new Schema({
    username: { 
        type: String,
        minLength:6 ,
        required: 'UserName is required',
    },
    name: { 
        type: String,
         minLength:6,
         required: 'Name is required',
    },
    password: { 
        type: String,
         minLength:6,
         required: 'Password is required',
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
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

module.exports = mongoose.model('Admin', Admin);

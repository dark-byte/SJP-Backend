const mongoose = require('mongoose')
const Skills = require('./Skills')
const Joblist = require('./Joblist')

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
    ph: {
        type: String
    },
    experience:{
        type: Number
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    social_links: [{
        type:String
    }],
    resume: {
        data: Buffer,
        contentType: String
    }, 
    degrees: [{
        type: String
    }],
    skills: {
        type: String,
        enum: Skills,
        default: ''
    },
    bookmarks: [{type: Joblist}]

})

const UserModel = mongoose.model('UserModel', userModel)

module.exports = UserModel
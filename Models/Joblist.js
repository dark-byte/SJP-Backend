const mongoose = require ('mongoose')
const { skills } = require('./Skills')
const jobList = new mongoose.Schema ({
    job_title : {
        type: String
    },
    experience_required: [{
        type: String
    }],
    salary_expected : {
        type : String
    },
    location: {
        type: String,
        enum: ['Remote', 'On site'],
    },
    posted_date: {
        type: Date
    },
    number_of_applicants: {
        type: Number
    },
    job_description: {
        type: String
    },
    skills_required: {
        type: String
    },
    industry_type: {
        type: String
    },
    employment_type: {
        type: String,
        enum: ['Full Time','Part Time','Intern']
    },
    education_required: [{
      type: String  
    }],
    key_skills : [{
        type: String,
        enum: skills,
        default: ''
    }]
})
const Joblist = mongoose.model('Joblist',jobList)
module.exports= Joblist
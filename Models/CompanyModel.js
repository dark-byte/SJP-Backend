const mongoose = require ('mongoose')

const companyModel = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    logo: {
        data :Buffer,
        contentType: String
    },
    job_lists: [{
        type: String
    }],
    company_description : {
        type: String
    },
    social_links : [{
        type: String
    }],
    industry :{
    type: String
    }
})



const CompanyModel = mongoose.model('CompanyModel', companyModel)

module.exports = CompanyModel
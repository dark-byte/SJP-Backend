const mongoose = require('mongoose');

const companyModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    logo: {
        data: Buffer,
        contentType: String
    },
    job_lists: [{
        title: String,
        description: String
    }],
    company_description: {
        type: String
    },
    social_links: {
        website: String,
        linkedin: String
    },
    industry: {
        type: String
    }
});

const CompanyModel = mongoose.model('CompanyModel', companyModel);

module.exports = CompanyModel;

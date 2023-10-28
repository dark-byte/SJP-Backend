const mongoose = require ('mongoose')
const companyModel = new mongoose.Schema ({
name:{
    type:String,
    require:true,
    trim:true
},
logo: {
    data :Buffer,
    contentType: String
},
JobList: [{
    type: String
}],
About_company : {
    type: String
},
social_links : [{
    type: String
}],
Industry :{
type: String
}
})
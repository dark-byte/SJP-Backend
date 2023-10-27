const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const MONGO_URL = process.env.MONGO_URL


const connect = async ()=>{
    
    const con = await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "Users"
    })
}

mongoose.connection.once('open',()=>{
    console.log("Connection Ready!")
})

mongoose.connection.on('error', (err)=>{
    console.error(err)
})

connect()

module.exports = UserModel.connect
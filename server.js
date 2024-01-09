
const express = require('express')
const CompanyModel = require('./Models/CompanyModel')
const db = require('./MongoConnect')


const app = express()
app.use(express.json())

const PORT = process.env.PORT || 9000

app.get('/', (req, res) => {
    res.send({ "msg": "Connection Successful!" })
})

app.post('/company', async (req, res) =>{
    const { name, logo, company_description, job_lists, industry, social_links } = req.body

    const newCompany = new CompanyModel({
        name, logo, company_description, job_lists, industry, social_links
    })

    try{
        await newCompany.save();
        console.log("New Company added!", newCompany)
        return res.status(200).json({message: "Company added successfully!"})
    }
    catch(error){
        console.error("Some error occurred!", error)
        return res.status(500).json({error: "Some error occurred!"})
    }
})

app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})
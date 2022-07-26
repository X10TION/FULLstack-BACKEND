const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/user-routes')
const public = require('./routes/publicResource')
const bodyParser = require('body-parser')
const app = express()
app.use(express.json())
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/uploads', express.static('uploads'))
/*
*/
app.use('/api/v1', router)
app.use('/api/v1', public)
mongoose.connect("mongodb+srv://MAUCES:MAUCES@cluster0.bwdex.mongodb.net/?retryWrites=true&w=majority")
.then(() =>{
    app.listen(5000, () => {
        console.log("Databse is initializing  from mongodb cloud..")
        console.log("Server is initializing  to port 500...")
    })
}).catch((err) =>{
    console.log("ERROR CONNECTING TO THE SERVER :" + err)
})



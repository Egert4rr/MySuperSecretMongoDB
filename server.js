require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")
const passport = require("passport")
const passportlocalmongoose = require("passport-local-mongoose")

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))


const port = 3000

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
})
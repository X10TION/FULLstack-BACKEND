const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    reg:{
        type:String,
    // unique: [true, "reg must be a unique field"],
   // require: [true, 'please provide you student registration id']
    },
    fullname:{
            type:String
    },
    department:{
        type:String
    },
    password:{
        type:String
    },
    accounttype:{
        type: String,
        default:"publice"
    },
    email:{
        type:String
    },
    profilePicture:{
        type:String
    }
},{
    timestamps: true
})
module.exports = mongoose.model('User', userSchema)
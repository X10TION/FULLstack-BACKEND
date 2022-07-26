const User = require('../model/User')
const bcrypt = require('bcryptjs')
const { findOne } = require('../model/User')
const jwt = require('jsonwebtoken')
const JWT_SCRET_KEY = "MYKEY"
const register = async (req, res, next) => {
    const { reg, fullname, department, password, accounttype, email } = req.body
    let existingUser
     try{
        existingUser = await User.findOne({reg:reg})
     }catch(err){
        console.log("Registration fail :" + err)
     }
     if(existingUser){
        return res.status(400).json({msg: "User already exists.  Login Instead.."})
     }
     const hashPassword = bcrypt.hashSync(password)
    var user = new User({
            reg, 
            fullname,
            department,
            password,
            accounttype,
            email,
            password:hashPassword
    })
    if(req.file){
        user.profilePicture = req.file.path
    }
    try{
        await user.save()
    }catch(err){
        console.log(err)
    }
    return res.status(201).json({message : user})   
}

const login = async(req, res, next) => {
    const { reg, password} = req.body
    let existingUser
    try{
        existingUser = await User.findOne({reg: reg})
    }catch(err){
        return new Error(err)
    }
    if(!existingUser){
        return res.status.json({msg: "USER NOT FOUND. please signup "})
    }
    const isexistUser = bcrypt.compareSync(password,existingUser.password)
    if(!isexistUser){
        return res.status(400).json({msg: "Invalid reg and  password.."})
    }else{
    // const user = await User.findOne({reg})
    const token = jwt.sign({id: isexistUser._id},JWT_SCRET_KEY,{
        expiresIn: "5hr"
    })
    return res.status(200).json({
        msg: "Successfully Login",
        user: existingUser,
        token
    })
}
}

const verifyToken = (req, res, next) => {
    const headers = req.headers[`authorization`];
    console.log(headers);
    const token = headers.split(" ")[1];
    console.log(token);
    if(!token){
        res.status(404).json({mgs: "NO TOKEN FOUND FOR USER"})
    }
    jwt.verify(token, JWT_SCRET_KEY, (err, user) => {
        if(err){
            return res.status(400).json({msg: "INVALIDE TOKEN"})
        }
        console.log(id);
    //      req.id = user.id
    });
    // next()
};
// const home = async(req, res, next) => {}
exports.register = register
exports.login = login
exports.verifyToken = verifyToken
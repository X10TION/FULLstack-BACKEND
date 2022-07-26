const express = require('express')
const { register, login, verifyToken } = require('../controller/user-controller')
const upload = require('../middleware/fileUpload')
const router = express.Router()

router.post("/register", upload.single('profilePicture'), register)
router.post("/login", login)
router.get('/user', verifyToken)

module.exports = router
/*
user router
*/
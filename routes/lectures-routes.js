const express = require('express')
const upload = require('../middleware/fileUpload')
const createdLecture = require('../controller/lectures_controller')
const router = express.Router()
// create lectures
// upload material
// upload toturial question
// practical manual

router.post('/lectures', createdLecture)


module.exports = router

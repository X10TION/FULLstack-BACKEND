const express = require('express')
const { createCourse, coursesViewed,lectureJointed, singleCourse, deletedCourse }= require('../controller/course_controller')
const upload = require('../middleware/fileUpload')
const { lectureView, lectureCreated } = require('../controller/lectures_controller')
const router = express.Router()

/////////////////COURSES ROUTE
router.post('/courses', createCourse)
router.get('/courses', coursesViewed)
router.get('/course/:id', singleCourse)
router.delete('/course/:id', deletedCourse)


//////////////////// LECTURE ROUTE
router.post('/lecture/:id', lectureJointed)
// router.post('lectures', lectureCreated)
// router.post('/lecture', lectureView)
// router.post('/lectureCreated',upload.single('material'),lectureCreated)


module.exports = router
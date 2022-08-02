const lecture = require('../model/lectures-model')


exports.lectureCreated = (req, res) => {
    lecture.find({}).exec((err, data) =>{
    if(err) console.log(err)
    res.json({
        msg:"all lectures here",data})
    })
}
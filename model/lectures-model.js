const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lectureSchema = new Schema ({

    lectureTitle:String,
    lectureDescriptions:String,
    lectureObjectives:String,
    material:Array,
    toturialQuestions:Array,
    practicalManual:Array
},{
    timestamps: true
})
module.exports = mongoose.model('Lecture',lectureSchema)
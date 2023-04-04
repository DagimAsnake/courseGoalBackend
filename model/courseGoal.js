const mongoose = require("mongoose");
const {Schema, model} = mongoose

const CourseGoalSchema = new Schema({
    text:{
        type:String, 
        required:true
    }
})

const CourseGoal = model("CourseGoal", CourseGoalSchema);
module.exports = CourseGoal
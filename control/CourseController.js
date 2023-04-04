const CourseGoal = require("../model/courseGoal")

module.exports.CreateCourseGoal = (async function (req, res) {
    const data = req.body;
    if (!(data.text)) {
      return res.json({
        msg: "Input are required",
      });
    }
  
    let text = {text: data.text}
   
    const new_user = new CourseGoal(text);
  
    await new_user.save();
    return res
      .json({
        msg: "Course Goal created successfully",
      })
      .status(200);
  });

  module.exports.getCourseGoal = async function(req, res) {
    const courses = await CourseGoal.find({})
    let data = [];
    courses.forEach((course) => {
      let datas = {
        _id: course._id,
        text: course.text
      }
      data.push(datas);
    });
    
    return res.json({
      msg: data
    }).status(200)
  }

  module.exports.deleteCourseGoal = async function(req, res) {
    const { goalId } = req.params;
    const data_exists = await CourseGoal.findByIdAndDelete(goalId);
    if (!data_exists) {
      return res
        .json({
          msg: "No Such Course",
        })
        .status(403);
    }
  
    return res
      .json({
        msg: "Course Goal Deleted Successfully",
      })
      .status(200);
  }
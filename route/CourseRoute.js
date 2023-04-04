const router = require("express").Router();
const CourseController = require("../control/CourseController")

router.post("/post", CourseController.CreateCourseGoal)
router.get('/get', CourseController.getCourseGoal)
router.post('/delete/:goalId', CourseController.deleteCourseGoal)

module.exports = router;

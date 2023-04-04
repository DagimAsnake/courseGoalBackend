const { app, express } = require("./server");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://127.0.0.1/courseGoal", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database conneceted successfully");
  })
  .catch((err) => {
    console.log("Error while connecting to database");
    console.log(err);
  });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
  });


  const CourseRouter = require('./route/CourseRoute')

  app.use('/course', CourseRouter)

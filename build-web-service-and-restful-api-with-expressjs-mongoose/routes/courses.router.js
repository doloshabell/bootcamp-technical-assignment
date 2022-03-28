const express = require("express");
const course = express.Router();

const { getAll, getById, addCourse, updateCourse, deleteCourse } = require("../controllers/courses.controller");

course.get("/", getAll);
course.get("/:id", getById);
course.post("/", addCourse);
course.put("/:id", updateCourse);
course.delete("/:id", deleteCourse);

module.exports = course;
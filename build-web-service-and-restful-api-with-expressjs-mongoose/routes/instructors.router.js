const express = require("express");
const instructor = express.Router();

const { getAll, getById, addInstructor, updateInstructor, deleteInstructor } = require("../controllers/instructors.controller");

instructor.get("/", getAll);
instructor.get("/:id", getById);
instructor.post("/", addInstructor);
instructor.put("/:id", updateInstructor);
instructor.delete("/:id", deleteInstructor);

module.exports = instructor;
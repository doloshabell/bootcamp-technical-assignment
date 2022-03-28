const {Courses} = require("../models");

module.exports = {
    getAll: async (req, res) => {
        const courses = await Courses.find({}, "-__v").populate("instructor", "-__v");

        try {
            res.json({
                message: "success get all data",
                courses: courses
            });
        }
        catch (err) {
            res.status(500).send(err);
        }
    },

    getById: async (req, res) => {
        const id = req.params.id;
        const course = await Courses.findById(id, "-__v").populate("instructor", "-__v");

        try {
            res.json({
                message: "success get data course",
                course: course
            });
        }
        catch (err) {
            res.status(500).send(err);
        }
    },

    addCourse: async (req, res) => {
        const data = req.body;

        try {
            await Courses.create(data);
            res.json({
                message: "new courses created",
                course: data
            });
        }
        catch (err) {
            res.status(500).send(err);
        }
    },

    updateCourse: async (req, res) => {
        const data = req.body;
        const id = req.params.id;

        try {
            await Courses.findByIdAndUpdate(id, data);
            res.json({
                message: "course data updated",
                course: data
            });
        }
        catch (err) {
            res.status(500).send(err);
        }
    },

    deleteCourse: async (req, res) => {
        const id = req.params.id;

        try {
            await Courses.findByIdAndDelete(id);
            res.json({
                message: `course with id ${id} removed`,
            });
        }
        catch (err) {
            res.status(500).send(err);
        }
    }
}
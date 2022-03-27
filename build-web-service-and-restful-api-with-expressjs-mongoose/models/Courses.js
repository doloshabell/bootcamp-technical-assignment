const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500
    },
    instructor: {
        type: mongoose.Types.ObjectId,
        ref: "instructors",
        required: true
    },
    scheduleDateTime: {
        type: Date,
        required: true
    }
});

const Courses = mongoose.model("courses", coursesSchema);

module.exports = Courses;
const mongoose = require("mongoose");

const instructorsSchema = new mongoose.Schema({
    nama: {
        type: String,
        require: true,
        minlength: 1,
        maxlength: 100
    },
    dateOfBirth: {
        type: Date,
        require: true
    },
    location: {
        type: String,
        require: false
    }
});

const Instructors = mongoose.model("instructors", instructorsSchema);

module.exports = Instructors;
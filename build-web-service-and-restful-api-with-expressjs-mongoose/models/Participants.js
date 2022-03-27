const mongoose = require("mongoose");

const participantsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: false,
        maxlength: 50
    },
    phone: {
        type: String,
        required: false,
        maxlength: 13
    },
    courses: {
        type: mongoose.Types.ObjectId,
        ref: "courses"
    }
});

const Participants = mongoose.model("participants", participantsSchema);

module.exports = Participants;
const mongoose = require("mongoose");

const uri = "mongodb+srv://doloshab:doloshab123@cluster0.ndftz.mongodb.net/highHaku?retryWrites=true&w=majority";

const db = mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = db;
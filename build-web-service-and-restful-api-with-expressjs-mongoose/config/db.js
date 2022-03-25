const mongoose = require("mongoose");

const dbName = "highHaku"

const uri = `mongodb+srv://doloshab:doloshab123@cluster0.ndftz.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const db = mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = db;
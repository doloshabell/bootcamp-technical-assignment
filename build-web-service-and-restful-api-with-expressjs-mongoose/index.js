const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.then(() => console.log("Success connect to MongoDB Atlas"))
    .catch(err => console.error(err));

app.listen(PORT, () => {
    console.log("Server running on PORT", PORT);
});
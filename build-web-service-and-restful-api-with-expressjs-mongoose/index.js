const express = require("express");
const cors = require("cors");

const db = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;

db.then(() => console.log("Success connect to MongoDB Atlas"))
.catch(err => console.error(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log("Server running on PORT", PORT);
});
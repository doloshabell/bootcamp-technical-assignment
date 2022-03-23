const express = require("express");
const { Sequelize } = require("sequelize");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log("Server running on PORT", PORT);
});
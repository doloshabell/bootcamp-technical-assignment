const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/hewan", require("./hewan/hewan"));

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log("Connection has been established successfully.");
//     })
//     .catch(err => {
//         console.error("Unable to connect the database:", err);
//     });

// const Hewan = sequelize.define('hewan', { nama: Sequelize.STRING, namaSpesies: Sequelize.STRING, umur: Sequelize.INTEGER });

// sequelize.sync({ force: true })
//     .then(() => {
//         console.log("Table created!");
//     })

app.listen(PORT, () => {
    console.log("Server running on PORT", PORT);
});
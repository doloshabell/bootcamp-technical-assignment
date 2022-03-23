const express = require("express");
const bodyParser = require('body-parser');
const Sequelize = require("sequelize");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sequelize = new Sequelize("db_hewan", "root", "root",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch(err => {
        console.error("Unable to connect the database:", err);
    });

const Hewan = sequelize.define('hewan', { nama: Sequelize.STRING, namaSpesies: Sequelize.STRING, umur: Sequelize.INTEGER });

sequelize.sync({ force: true })
    .then(() => {
        console.log("Table created!");
    })

app.get("/hewan", async (req, res) => {
    await Hewan.findAll().then(hewan => res.json({
        data: hewan
    }));
});

app.get("/hewan/:id", (req, res) => {
    Hewan.findOne({where: {id : req.params.id}}).then(hewan => res.json({
        data: hewan
    }))
});

app.post('/hewan', function(req, res) {
  Hewan.create({ nama: req.body.nama, namaSpesies: req.body.namaSpesies, umur: req.body.umur }).then(function(hewan) {
    res.json(hewan); 
  });
});

app.put('/hewan/:id', function(req, res) {
  Hewan.findByPk(req.params.id).then(function(hewan) {
    hewan.update({
      nama: req.body.nama,
      namaSpesies: req.body.namaSpesies,
      umur: req.body.umur
    }).then((hewan) => {
      res.json(hewan);
    });
  });
});

app.delete("/hewan/:id", (req, res) => {
    Hewan.findByPk(req.params.id).then(function(hewan) {
        hewan.destroy();
    }).then(() => {
        res.sendStatus(200);
    });
})

app.get("/", (req, res) => {
    res.json("Hallo dari index.js");
});

app.listen(PORT, () => {
    console.log("Server running on PORT", PORT);
});
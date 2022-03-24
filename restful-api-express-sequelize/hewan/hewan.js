const express = require("express");
const Sequelize = require("sequelize");
const { Hewan } = require("../models/index");

const hewan = express.Router();

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
    .then(() => {
        Hewan.sync().then(() => {
            console.log("table Hewan created");
        })
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
    });

hewan.get("/", async (req, res) => {
    // Hewan.findAll().then(hewan => res.json({
    //     data: hewan
    // }));
    const data = await Hewan.findAll();
    res.json({
        data: data
    });
});

hewan.get("/:id", async (req, res) => {
    await Hewan.findOne({ where: { id: req.params.id } }).then(hewan => res.json({
        data: hewan
    }))
    // const id = req.params.id;
    // const data = await Hewan.findOne({where: id});
    // res.json({
    //     data: data
    // });
});

hewan.post('/', async (req, res) => {
    await Hewan.create({ nama: req.body.nama, namaSpesies: req.body.namaSpesies, umur: req.body.umur }).then(function (hewan) {
        res.json(hewan);
    });
});

hewan.put('/:id', async (req, res) => {
    await Hewan.findByPk(req.params.id).then(function (hewan) {
        hewan.update({
            nama: req.body.nama,
            namaSpesies: req.body.namaSpesies,
            umur: req.body.umur
        }).then((hewan) => {
            res.json(hewan);
        });
    });
});

hewan.delete("/:id", async (req, res) => {
    await Hewan.findByPk(req.params.id).then(function (hewan) {
        hewan.destroy();
    }).then(() => {
        res.json({
            message: "Hewan was deleted successfully"
        });
    });
})

module.exports = hewan;
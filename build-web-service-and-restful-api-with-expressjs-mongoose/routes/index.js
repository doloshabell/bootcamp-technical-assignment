const express = require("express");
const router = express.Router();

const instructorsRouter = require("./instructors.router");

router.get("/", (req, res) => {
    res.json("Ini dari express yang konek ke mongodb atlas dengan mongoose");
});

router.use("/instructor", instructorsRouter);

module.exports = router;
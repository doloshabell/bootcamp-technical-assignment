const express = require("express");
const router = express.Router();

const instructorsRouter = require("./instructors.router");
const coursesRouter = require("./courses.router");

router.get("/", (req, res) => {
    res.json("Ini dari express yang konek ke mongodb atlas dengan mongoose");
});

router.use("/instructor", instructorsRouter);
router.use("/course", coursesRouter);

module.exports = router;
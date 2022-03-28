const { Instructors } = require("../models");

module.exports = {
    getAll: async (req, res) => {
        const instructors = await Instructors.find({}, "-__v");

        try {
            res.json({
                message: "success get all data instructors",
                instructors: instructors
            });
        } 
        catch (err) {
            res.status(500).send(err);
        }
    },

    getById: async (req, res) => {
        const id = req.params.id;        
        const instructor = await Instructors.findById(id, "-__v");

        try{
            res.json({
                message: "success get data instructor",
                instructor: instructor
            });
        }
        catch (err){
            res.status(500).send(err);
        }
    },

    addInstructor: async (req, res) => {
        const data = req.body;

        try{
            await Instructors.create(data);
            res.json({
                message: "new instructor created",
                instructor: data
            });
        }
        catch (err) {
            res.status(500).send(err);
        }
    },

    updateInstructor: async (req, res) => {
        const data = req.body;
        const id = req.params.id;

        const instructor = await Instructors.findByIdAndUpdate(id, data);

        try {
            res.json({
                message: "instructor data updated",
                instructor: instructor
            });
        }
        catch (err) {
            res.status(500).send(err);
        }
    },

    deleteInstructor: async (req, res) => {
        const id = req.params.id;
        try{
            await Instructors.findByIdAndDelete(id);
            res.json({
                message: `instructor with id ${id} removed`
            });
        }
        catch (err) {
            res.status(500).send(err);
        }
    }
};
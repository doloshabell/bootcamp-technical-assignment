const { Participants } = require("../models");

module.exports = {
    getAll: async (req, res) => {
        const participants = await Participants.find({}, "-__v").populate("courses", "-__v -_id");

        try {
            res.json({
                message: "success get all data participants",
                participants: participants
            });
        }
        catch (err) {
            res.status(500).send(err);
        }
    },

    getById: async (req, res) => {
        const id = req.params.id;
        const participant = await Participants.findById(id, "-__v").populate("courses", "-__v -_id");

        try {
            res.json({
                message: `success get data participant ${id}`,
                participant: participant
            });
        }
        catch (err) {
            res.status(500).send(err);
        }
    },

    addParticipant: async (req, res) => {
        const data = req.body;

        try {
            await Participants.create(data);
            res.json({
                message: "new participant created",
                participant: data
            });
        }
        catch (err) {
            res.status(500).send(err);
        }
    },

    updateParticipant: async (req, res) => {
        const id = req.params.id;
        const data = req.body;

        const participant = await Participants.findByIdAndUpdate(id, data);

        try {
            res.json({
                message: "participant data updated",
                participant: participant
            });
        }
        catch (err) {
            res.status(500).send(err);
        }
    },

    deleteParticipant: async (req, res) => {
        const id = req.params.id;

        try {
            await Participants.findByIdAndDelete(id);
            res.json({
                message: `participant with id ${id} removed`
            });
        }
        catch (err) {
            res.status(500).send(err);
        }
    }
}
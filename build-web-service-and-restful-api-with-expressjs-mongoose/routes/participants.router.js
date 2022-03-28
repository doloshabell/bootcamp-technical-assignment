const express = require("express");
const participant = express.Router();

const { getAll, getById, addParticipant, updateParticipant, deleteParticipant } = require("../controllers/participants.controller");

participant.get("/", getAll);
participant.get("/:id", getById);
participant.post("/", addParticipant);
participant.put("/:id", updateParticipant);
participant.delete("/:id", deleteParticipant);

module.exports = participant;
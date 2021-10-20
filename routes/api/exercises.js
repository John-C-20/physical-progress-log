const express = require("express")
const router = express.Router() 
const { getExercises, addExercise } = require("../../controllers/exercises.js");

router.get("/all", getExercises)
router.post("/new", addExercise)

module.exports = router; 
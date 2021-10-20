const express = require("express")
const router = express.Router() 
const { getExercises, getExercise, addExercise } = require("../../controllers/exercises.js");

router.get("/", getExercises)
router.get("/:id", getExercise) 
router.post("/", addExercise)
router.patch("/:id")
router.delete("/:id")

module.exports = router; 
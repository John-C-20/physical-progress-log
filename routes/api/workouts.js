const express = require("express")
const router = express.Router() 
const { getExercises, getExercise, addExercise } = require("../../controllers/exercises.js");


router.get("/", getWorkouts)
router.get("/:id", getWorkout)
router.post("/", addWorkout)
router.patch("/:id")
router.delete("/:id")
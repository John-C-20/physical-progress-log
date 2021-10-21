const express = require("express")
const router = express.Router() 
const { getWorkouts, getWorkout, addWorkout } = require("../../controllers/workouts.js");


router.get("/", getWorkouts)
router.get("/:id", getWorkout)
router.post("/", addWorkout)
router.patch("/:id")
router.delete("/:id")

module.exports = router;
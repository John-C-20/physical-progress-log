const { Workout } = require("../models/Workout.js");


const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.status(200).send(workouts)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const getWorkout = async (req, res) => {

    try {
        const id = await req.params.id
        const workout = await Workout.find({ _id: id });
        res.status(200).send(workout)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const addWorkout = async (req, res) => {
    try {
        const body = await req.body
        const workout = await Workout.create(body)
        res.status(200).send(workout)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getWorkouts,
    getWorkout,
    addWorkout
}

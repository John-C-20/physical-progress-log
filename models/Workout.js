const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ExerciseSchema } = require("./Exercise");

const WorkoutSchema = new Schema ({
    date: Date,
    exercises: [ExerciseSchema] // embedded document
})

module.exports = mongoose.model("Workout", WorkoutSchema); // exports Workout model
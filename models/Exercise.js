const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {type: String, required: true},
    sets: Number,
    reps: Number,
    weight: Number
})

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = { ExerciseSchema, Exercise }; 

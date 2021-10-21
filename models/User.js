// Mongoose models 

// Mongoose ODM (Object data Modeling library) is not required in order to use MongoDB 
// We use it here to create schema validations similar to Rails 

const mongoose = require("mongoose")
const Schema = mongoose.Schema; 

// Building schema for User model 

const UserSchema = new Schema({
    name: {type: String,required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    age: {type:  Number, required: true},
    height: {type: String, required: true},
    weight: {type: Number, required: true},
    workouts: [{type: Schema.ObjectId, ref: 'Workout'}]
})

module.exports = mongoose.model("User", UserSchema); // exports User model

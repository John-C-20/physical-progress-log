const express = require("express")
const mongoose = require('mongoose');
const passport = require("passport"); // we will use this to authenticate jwt web token from the client
const app  = express()
const uri = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const workouts = require("./routes/api/workouts");
const exercises = require("./routes/api/exercises");

app.use(passport.initialize()); // initialize passport and add middleware 
require('./config/passport')(passport);

// Setting the port 
// Heroku requires us to run our server on process.env.PORT
// locally, we want to run out server on localhost:5000

const port = process.env.PORT || 5000 

// start a socket and have server listen for connections using express().listen()

app.listen(port, () => console.log(`server is running on port ${port}`));

// Connect to MongoDB using the imported uri

mongoose
.connect(uri, { useNewUrlParser: true })
.then(() => console.log("connected to MongoDB successfully"))
.catch(err => console.log(err));

// import body parser to parse the JSON that we send to the frontend
// const bodyParser = require("body-parser")

app.use(express.urlencoded( { extended: false } )); // replaces app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json()) // replaces app.use(bodyParser.json())


// Using imported routes 

app.use("/api/users", users); 
app.use("/api/workouts/", workouts); 
app.use("/api/exercises/", exercises); 


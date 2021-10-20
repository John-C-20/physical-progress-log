// Creating the Server

const express = require("express")
const app  = express()

// Creating a route 

app.get("/", (request, response) => response.send("hello world"));

// Setting the port 
// Heroku requires us to run our server on process.env.PORT
// locally, we want to run out server on localhost:5000

const port = process.env.PORT || 5000 

// start a socket and have server listen for connections using express().listen()

app.listen(port, () => console.log(`server is running on port ${port}`));

// using node.js http module we would do: 
// const http = require("http")
// const server = http.createServer((req, res) => {
//     res.write("hello world")
//     res.end()
// })
// server.listen(5000, () => console.log("server is running on port 3000"));

// Connecting to our database to mongoDB using mongoose

const mongoose = require('mongoose');
const uri = require("./config/keys").mongoURI;

mongoose
.connect(uri, { useNewUrlParser: true })
.then(() => console.log("connected to MongoDB successfully"))
.catch(err => console.log(err));

// Importing Express routes created in ./routes/api/ 

const users = require("./routes/api/users");

// Using imported routes 

app.use("/api/users", users); // appends the users route ("/test") to "/api/users"

// this would be the same without using express.Router()
// app.get("/api/users/test", (req, res) => res.json({ msg: "this is the users route v2" }))


// import body parser to parse the JSON that we send to the frontend
// const bodyParser = require("body-parser")
app.use(express.urlencoded( { extended: false } )); // replaces app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json()) // replaces app.use(bodyParser.json())



const exercises = require("./routes/api/exercises");
app.use("/api/exercises/", exercises); 


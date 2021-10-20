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

// // using node.js http module we would do: 
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
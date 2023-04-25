// set up the server
const express = require("express");
const app = express()
const port = 3000;
const logger = require("morgan");

// define middleware that logs all incoming requests
app.use(logger("dev"));

//use public as the folder for static files
app.use(express.static(__dirname + '/public'));

// define a route for the default home page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/Lab1-pg1.html");
});

// start the server
app.listen(port, () => {
    console.log(`app listening at localhost:${port}`);
});

// define a route for the saved recipe page 
app.get("/savedrecipe", (req, res) => {
    res.sendFile(__dirname + "/views/Lab1-pg2.html");
})

// define a route for the saved recipe detail page 
app.get("/savedrecipe/details", (req, res) => {
    res.sendFile(__dirname + "/views/Lab1-pg3.html");
})

// define a route for the recipe page
app.get( "/recipe", ( req, res ) => {
    res.sendFile( __dirname + "/views/Lab1-pg4.html" );
} );



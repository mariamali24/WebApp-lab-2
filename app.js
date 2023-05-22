// set up the server
const express = require("express");
const app = express()
const port = 3036;
const logger = require("morgan");

// new lines 
const DEBUG = true;
const db = require('./db/db_connection');

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

const read_saved_recipes_sql = `
    SELECT * FROM recipes
    `

// define a route for the saved recipe page 
app.get("/savedrecipe", (req, res) => {
    db.execute (read_saved_recipes_sql, (error, results) =>
    {
        if(DEBUG){
            console.log(error ? error : results)
        }
        if(error){
            res.status(500).send(error)
        }
        else{
            res.send(results);
        }
    })
    
})

// define a route for the saved recipe detail page 
app.get("/savedrecipe/details", (req, res) => {
    res.sendFile(__dirname + "/views/Lab1-pg3.html");
})

// define a route for the recipe page
app.get( "/recipe", ( req, res ) => {
    res.sendFile( __dirname + "/views/Lab1-pg4.html" );
} );



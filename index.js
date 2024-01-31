// This adds all needed dependencies
const express = require('express');
const path = require('path');

// This sets up Express app
const app = express()
const PORT = process.env.PORT || 3000;

// This sets up the Express app to handle data parsing
app.use(express.json());

// This tells the HTML page to start in the public folder when looking 
app.use(express.static(path.join(__dirname + '/app/public')));

// This is the api-route  
require("./app/routing/api-routes.js")(app);

// This is the html-route
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});

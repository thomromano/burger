//npm packages for server functionality
var express = require("express");
var bodyParser = require("body-parser");

//Express configuration
var app = express();
var PORT = process.env.PORT || 8000;

//sets express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

/* TO DO
IMPORT ROUTES */

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

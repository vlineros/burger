var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

// ************** look at cats AND watchlist to help get the things printing to the screen ***********************

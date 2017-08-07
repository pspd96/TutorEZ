var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/signup", function (req, res) {
    res.render("sign-up");
});

app.get("/student", function (req, res) {
    res.render("studentProfile");
});

app.get("/teacher", function (req, res) {
    res.render("teacherProfile");
});

app.listen(3000, function () {
    console.log('Server has started');
});
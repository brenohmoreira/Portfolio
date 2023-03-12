const express = require("express");
const body_parser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

app.get("/", (req, res) => {
    res.render("hub/index.ejs");
});

app.get("/see-all", (req, res) => {
    res.render("hub/see-all.ejs");
});

app.listen(8080, () => {
    console.log("Server open");
});


const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

let items = [];
let index = items.length + 1;

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/items", (req, res) => {
  index = items.length + 1;
  res.render("item", {
    items,
  });
});

app.post("/add-item", (req, res) => {
  items.push({
    id: index,
    title: `Title Number ${index}`,
  });
  res.redirect("/items");
});

app.post("/remove-item", (req, res) => {
  items.pop();
  res.redirect("/items");
});

app.post("/clear-item", (req, res) => {
  items = [];
  res.redirect("/items");
});

app.listen(8000, () => {
  console.log(`http://localhost:8000`);
});

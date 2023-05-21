const express = require("express");
const hbs = require("hbs");
const path = require("path");
const dotenv = require("dotenv");
const app = express();
const userModel = require("../models/userModel");

dotenv.config({ path: "./config.env" });

require("../db/conn");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

app.use(express.json());

let items = [];
let index = items.length + 1;

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/testing", (req, res) => {
  res.send(process.env.MONGOURI);
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

app.get("/form", (req, res) => {
  res.render("form");
});

app.post("/send-data", async (req, res) => {
  const email = req.body.email;
  res.send(email);
  // const userdata = new userModel({ email, message });
  // const responce = await userdata.save();
  // if (responce) {
  //   res.redirect("/form");
  // } else {
  //   res.status(403).json({ error: "Some Error Occured" });
  // }
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

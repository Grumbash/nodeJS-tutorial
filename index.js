const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("/users log");
  next();
});

app.use("/users", (req, res, next) => {
  res.send("USERS");
});

app.use("/", (req, res, next) => {
  console.log("/ log");
  next();
});

app.use("/", (req, res, next) => {
  res.send(new Date());
});

app.listen(3000);

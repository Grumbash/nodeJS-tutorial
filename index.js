const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First log");
  next();
});

app.use((req, res, next) => {
  console.log("Second log");
  next();
});

app.use((req, res, next) => {
  res.send(new Date());
});

app.listen(3000);

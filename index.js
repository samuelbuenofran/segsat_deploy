const express = require("express");
// import express from express
const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors"); // npm i cors
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Some comments may include an uppercase word like FIXED or TODO. These just means that

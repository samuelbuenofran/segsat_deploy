const express = require("express");
// import express from express
const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors"); // npm i cors
app.use(cors()); // this line of code is used to allow cross origin requests

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Some comments may include an uppercase word like FIXED or TODO. These indicate that the comment is a special type of comment. These are called tags. Tags are used to indicate to other developers that there is some special meaning behind a particular comment. For example, a TODO tag indicates that the comment is a reminder that something needs to be done.

// Cyclic and Netfly are alternatives to render. They are used to deploy the app to the web.

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.port || 5000;

const courses = require("./courses.json");
app.get("/courses", (req, res) => {
  res.send(courses);
});

const test = require("./test.json");
app.get("/test/:id", (req, res) => {
  const id = req.params.id
  const selected = test.find(n => n._id == id)
  res.send(selected)
});

app.listen(port, () => {
  console.log("server is running on port", port);
});

const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "./dist")));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./dist/", "index.html"));
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});

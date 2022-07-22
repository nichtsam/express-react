const path = require("path");
const express = require("express");
const ReactRouter = express.Router();

ReactRouter.use(express.static(path.join(__dirname, "..", "build")));

ReactRouter.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

module.exports = ReactRouter;

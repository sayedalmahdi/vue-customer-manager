const express = require("express");
const app = express();
const serveStatic = require("serve-static");
const path = require("path");

app.use("/", serveStatic(path.join(__dirname, "/dist")));

const PORT = process.env.PORT || 8080;
app.listen(PORT);

const express = require("express");
const morgan = require("morgan");
const mainRoute = require("./routes/main.routes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(mainRoute)

module.exports = app;

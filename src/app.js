const express = require("express");
const app = express();

app.use(express.json());

const countriesRoutes = require("./routes/countries.routes");

app.use("/countries", countriesRoutes);

module.exports = app;
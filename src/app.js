const express = require("express");
const path = require("path");
const hbs = require("hbs");
const notFoundRouter = require("./routers/404");
const appRouter = require("./routers/app");

// -- definition of global settings --
global.__basedir = path.join(__dirname, "..");

console.log(__dirname);
console.log(__basedir);
console.log(__filename);

const maintenanceMiddleware = require("./middlewares/maintenance");
const logMiddleware = require("./middlewares/log");

// Create the Express application
const app = express();

// --- configuring express ---
app.use(express.json()); // parse requests of content-type - application/json

// --- set static directory files ---
const publicDirectoryPath = path.join(__basedir, "/public");
app.use(express.static(publicDirectoryPath)); // Mounts the static files middleware function

// --- set express view engine to Handlebars ---
app.set("view engine", "hbs");
// --- set the location of the views directory (Handlebars default is /views)
app.set("views", path.join(__basedir, "/templates/views"));
// --- set the location of Handlebars partials
hbs.registerPartials(path.join(__basedir, "/templates/partials"));

// --- Middlewares ---
app.use(maintenanceMiddleware);
app.use(logMiddleware);

// --- add routes ---
app.use(appRouter);
app.use(notFoundRouter);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

module.exports = app;

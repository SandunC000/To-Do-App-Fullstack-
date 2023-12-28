const express = require ("express");
const bodyParser  = require ("body-parser");
const UserRoute = require("./routes/user_routes");
const ToDoRoute = require("./routes/todo_routes");

const app = express();

app.use(bodyParser.json());

app.use("/",UserRoute);
app.use("/",ToDoRoute);

module.exports = app;
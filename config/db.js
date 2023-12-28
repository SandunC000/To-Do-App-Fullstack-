const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017', {
    dbName: 'new', // Specify the database name here
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

module.exports = mongoose.connection;


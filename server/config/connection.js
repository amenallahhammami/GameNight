const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://admin:pass@mongodb:27017"
);

module.exports = mongoose.connection;

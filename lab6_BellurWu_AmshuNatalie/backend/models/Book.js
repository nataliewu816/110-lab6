const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
});

module.exports = mongoose.model("Book", BookSchema);
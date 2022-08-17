const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: [String],
    required: true,
  },

  publisher: {
    type: String,
  },

  nsfw: {
    type: Boolean,
    default: false,
  },

  description: {
    type: String,
  },

  year: {
    type: Number,
  },

  //books : We look into this whwnever we add relationship
});

const BookModel = mongoose.model("book", BookSchema);

module.exports = BookModel;

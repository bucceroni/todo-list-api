const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
  user: { type: String, required: true, max: 100 },
  category: { type: String, required: true, max: 100 },
  description: { type: String, required: true, max: 500 },
  createdAt: { type: Date, default: new Date() },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model("Todo", TodoSchema);

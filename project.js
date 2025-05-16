const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Project', projectSchema);

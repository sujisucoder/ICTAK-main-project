const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String], // If multiple technologies are used, you can use an array of strings
    required: true,
  },
  teamSize: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

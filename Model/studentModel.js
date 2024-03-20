const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  sid: {
    type: String,
    unique: true,
    required: true,
  },
  sname: {
    type: String,
  },
  smobile: {
    type: Number,
  },
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = { studentModel };

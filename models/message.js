const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  to: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },  
  from: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  }
//   },
//   calories: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) throw new Error("Negative calories aren't real.");
//     },
//   },
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
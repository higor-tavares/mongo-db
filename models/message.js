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
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  read: {
    type: Boolean,
    default: false
  },
  deleted: {
    type: Boolean,
    default: false
  }
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
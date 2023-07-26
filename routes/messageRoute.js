const express = require("express");
const messageModel = require("../models/message");
const app = express();

app.get("/messages", async (request, response) => {
  const messages = await messageModel.find({});

  try {
    response.send(messages);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/messages/:to/:from", async (request, response) => {
  const {to, from} = request.params;
  const messages = await messageModel.find({ '$or': [{'to': to, 'from': from}, {'to': from, 'from': to}]});
  try {
    response.send(messages);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/messages", async (request, response) => {
    const message = new messageModel(request.body);
  
    try {
      await message.save();
      response.send(message);
    } catch (error) {
      response.status(500).send(error);
    }
});

module.exports = app;
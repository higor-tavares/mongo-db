const environments = require('dotenv');
const express = require("express");
const mongoose = require("mongoose");
const messageRoute = require("./routes/messageRoute.js");

environments.config();
const app = express();
app.use(express.json());

const { MDB_SERVER, MDB_PORT, MDB_USER, MDB_PASSWORD, MDB_DATABASE} = process.env;

mongoose.connect(`mongodb://${MDB_SERVER}:${MDB_PORT}/${MDB_DATABASE}`, {
    poolSize: 10,
    authSource: "admin",
    user: MDB_USER,
    pass: MDB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false 
});

app.use(messageRoute);

app.listen(3000, () => {
  console.log("Server is running...");
});
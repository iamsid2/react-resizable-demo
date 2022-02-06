const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const config = require("config");

const db = config.database.uri;

const logger = require("./lib/logger");

const app = express();
const server = http.Server(app);

//Middlewares
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());
//use routes
app.use("/api", require("./routes/api"));

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the Database..."))
  .catch((err) => console.log(err));

const httpPort = config.app.httpPort || 5000;
server.listen(httpPort, () => {
  logger.info(`Binded Port : ${httpPort}`);
});

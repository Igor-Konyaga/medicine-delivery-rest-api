const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const shopsRouter = require("./routes/api/shops");
const medicinesRouter = require("./routes/api/medicines");
const ordersRouter = require("./routes/api/orders");

const app = express();

dotenv.config({
  path: ".env",
});

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

mongoose
  .connect(process.env.MANGO_URL)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/shops", shopsRouter);
app.use("/api/medicines", medicinesRouter);
app.use("/api/orders", ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status ?? 500).json({ message: err.message });
});

module.exports = app;

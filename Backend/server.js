const express = require("express");
const cors = require("cors");
const tables = require("./modules/tables");
const logger = require("./utils/logger");
const app = express();

// Middlewarek
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bajai SZC Türr István Technikum.");
});

app.use("/", tables);

app.listen(3000, () => {
  logger.info("Szerver elindult a 3000-es porton");
});

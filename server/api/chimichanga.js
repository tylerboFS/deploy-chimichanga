// api/index.js
const express = require("express");
const { getAllChimis, createChimi } = require("../db");
const chimichangaRouter = express.Router();

// /api/chimichangas
chimichangaRouter.get("/", async (req, res) => {
  const chimis = await getAllChimis();
  res.send(chimis);
});

module.exports = chimichangaRouter;

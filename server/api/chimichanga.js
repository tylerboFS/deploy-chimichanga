// api/index.js
const express = require('express');
const chimichangaRouter = express.Router();

// /api/chimichanga
chimichangaRouter.get("/", (req, res)=>{
  res.send("Chimi route");
})


module.exports = chimichangaRouter;
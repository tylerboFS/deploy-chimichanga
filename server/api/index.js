// api/index.js
const express = require('express');
const chimichangaRouter = require('./chimichanga');
const apiRouter = express.Router();


apiRouter.use("/chimichangas", chimichangaRouter);

module.exports = apiRouter;
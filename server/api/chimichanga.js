// api/index.js
const express = require("express");
const chimichangaRouter = express.Router();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// /api/chimichanga
chimichangaRouter.get("/", async (req, res) => {
  const chimis = await prisma.chimichangas.findMany();
  res.send(chimis);
});

module.exports = chimichangaRouter;

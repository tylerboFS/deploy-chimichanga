const express = require('express')
const apiRouter = require('./api')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path');

app.use("/api", apiRouter);

app.use("/", express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
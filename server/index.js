const express = require('express')
const apiRouter = require('./api')
const app = express()
const port = 3000

app.use("/api", apiRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const { client } = require('./db');
client.connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
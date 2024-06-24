const express = require('express')
const apiRouter = require('./api')
const app = express()
const port = 3000

app.use("/api", apiRouter);

// app.get('/', (req, res) => {
//   // This should send back my front end
//   res.send('Hello World!')
// })

const pathToDist = __dirname + "/../client/dist";

console.log(pathToDist);

app.use("/", express.static(/** path to the html file */  pathToDist));

const { client } = require('./db');
client.connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
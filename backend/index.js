const connectToMongo = require('./db');
const express = require('express')
connectToMongo();

const app = express()
const port = 3000

app.use(express.json());

app.use('/api/auth', require('./Routes/auth'))
// app.use('/api/note', require('./Routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

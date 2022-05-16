const connectToMongo = require('./db');

connectToMongo();
const express = require('express')
const app = express()
const port = 5000


// Middleware used to know req.body
app.use(express.json())



// Available Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/note'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
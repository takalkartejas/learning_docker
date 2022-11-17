const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json({     //we modified this to send a json object instead of hello world
  name: 'Bob',
  email: 'bob@gmail.com'
}))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
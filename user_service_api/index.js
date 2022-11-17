const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([{     // modified to return in form of array
    name: 'Bob',                            // we created a simple api
    email: 'bob@gmail.com'
},
{
    name: 'rob',                            
    email: 'rob@gmail.com'
}
]))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
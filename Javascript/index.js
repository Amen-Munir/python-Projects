require('dotenv').config() //from the env file 
const express = require('express')  

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter', (req, res) =>{
    
    res.send("twitter")
})

app.get('/login', (req, res) =>{
    
    res.send("<h1>please login at my server</h1>")
})



// .get method is used to get the urls and give a response as per the request

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
}) 
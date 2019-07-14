if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express")
const path = require("path")
const app = express()

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/api/demo', (request, response) => {
  response.json({
    message: "Hello from server.js"
  })
})
// END DEMO

//API call for keyword search on home page
app.get('/search/:query', (request, response) => {
  axios.get(`https://newsapi.org/v2/everything?q=${request.params.query}&apiKey=${process.env.NA_API_KEY}`)
    .then(newsResponse => response.json(newsResponse.data.Search || []))
})


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

const port = process.env.PORT || 8080
app.listen(
  port,
  () => { console.log(`API listening on port ${port}...`) }
)

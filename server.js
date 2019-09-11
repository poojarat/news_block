if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express")
const path = require("path")
const app = express()
const axios = require("axios")

//API call for keyword search on home page
app.get('/search/:query', (request, response) => {
  axios.get(`https://newsapi.org/v2/everything?language=en&q=${request.params.query}&apiKey=NA_API_KEY`)
    .then(newsResponse => {
      response.send(newsResponse.data)
    })
    .catch(error => response.send(error))
})

app.get('/api/:category', (request, response) => {
  axios.get(`https://newsapi.org/v2/top-headlines?category=${request.params.category}&language=en&country=us&apiKey=NA_API_KEY&pageSize=100`)
    .then(categoryResponse => response.json(categoryResponse.data.articles))
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

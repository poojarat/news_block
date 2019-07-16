if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express")
const path = require("path")
const app = express()
const axios = require("axios")

// END DEMO

//API call for keyword search on home page
app.get('/search/:query', (request, response) => {
  console.log('key', process.env.NA_API_KEY)
  axios.get(`https://newsapi.org/v2/everything?q=${request.params.query}&apiKey=${process.env.NA_API_KEY}`)
    .then(newsResponse => {
      response.send(newsResponse.data)
    })
    .catch(error => response.send(error))
})

app.get('/api/:category', (request, response) => {
  // console.log(`https://newsapi.org/v2/top-headlines?category=${request.params.query}&language=en&country=us&apiKey=${process.env.NA_API_KEY}&pageSize=21`)
  axios.get(`https://newsapi.org/v2/top-headlines?category=${request.params.category}&language=en&country=us&apiKey=${process.env.NA_API_KEY}&pageSize=100`)
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

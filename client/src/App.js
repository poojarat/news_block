import React from 'react'
import './App.css'
import axios from 'axios'
import Home from './pages/Home'


class App extends React.Component {
  state = { serverMessage: '' }

  getNews = (input) => {
    axios.get(`/search/${input}`)
    .then((response) => console.log(response))
  }

  render(){
    return (
      <Home getNews={this.getNews} />
    )
  }
}

export default App

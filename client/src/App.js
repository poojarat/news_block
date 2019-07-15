import React from 'react'
import './App.css'
import axios from 'axios'
import Home from './pages/Home'


class App extends React.Component {
  state = { 
    serverMessage: '',
    showNav: false,
  }

  toggleNav = () => {
    if (this.state.showNav) {
      this.setState({ showNav: false })
    } else {
      this.setState({ showNav: true })
    }
  }

  getNews = (input) => {
    axios.get(`/search/${input}`)
    .then((response) => console.log(response))
  }

  render(){
    return (
      <Home getNews={this.getNews} show={this.state.showNav} toggleNav={this.toggleNav}/>
    )
  }
}

export default App

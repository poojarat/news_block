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

  state = { serverMessage: '', articles: [], modalOpen: false }

  getNews = (input) => {
    axios.get(`/search/${input}`)
       .then(({data}) => {
        console.log(data.articles);
        const articles = data.articles,
              articlesLength = articles.length;
        this.setState({ modalOpen: true, articles: articlesLength ? articles : [] })
      })
      .catch(err => console.log(err));
  }

  closeModal = () => {
    this.setState({ modalOpen: false })

  }

  render(){
    return (
      <Home getNews={this.getNews} show={this.state.showNav} toggleNav={this.toggleNav}/>
    )
  }
}

export default App

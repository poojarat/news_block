import React from 'react'
import './App.css'
import axios from 'axios'
import Home from './pages/Home'
import ArticlesModal from './components/Modal'

class App extends React.Component {
  state = { 
    serverMessage: '',
    showNav: false,
    modalOpen: false,
    articles: [],
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

  categoryArticles = (category) => {
    axios.get(`/api/${category}`)
      .then((response) => this.setState({articles: response.data, modalOpen: true}))
  }

  render(){
    return (
      <div>
        <Home
          getNews={this.getNews}
          articles={this.state.articles}
          show={this.state.showNav}
          toggleNav={this.toggleNav}
          categoryArticles={this.categoryArticles}
        />
        <ArticlesModal
          open={this.state.modalOpen}
          articles={this.state.articles}
          closeModal={this.closeModal}
        />
      </div>
    )
  }
}

export default App

import React from 'react';
import '../App.css';
import SearchBar from '../components/SearchBar'
import CurrentDate from '../components/CurrentDate'
import DropDown from '../components/DropMenu/DropMenu';
import ArticlesModal from '../components/Modal.js'
import axios from 'axios'

const CATEGORIES_LIST = [
    {
      category: 'Sports',
      styles: {
        backgroundColor: "rgb(255, 120, 53)"
      }
    },
    {
      category: 'Health',
      styles: {
        backgroundColor: "rgb(210, 95, 53)"
      }
    },
    {
      category: 'Entertainment',
      styles: {
        backgroundColor: "rgb(255, 92, 53)"
      }
    },
    {
      category: 'Business',
      styles: {
        backgroundColor: "rgb(240, 222, 61)"
      }
    },
    {
      category: 'Technology',
      styles: {
        backgroundColor: "rgb(255, 198, 53)"
      }
    },
    {
      category: 'Science',
      styles: {
        backgroundColor: "rgb(221, 148, 98)"
      }
    },
  ]

class Home extends React.Component  {
  state = { 
    showNav: false,
    modalOpen: false,
    articles: []
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
  render() {
    return (
  <div>
  <header>
    <nav id="navbox">
      <span>
        <DropDown toggleNav={ this.toggleNav } show={ this.state.showNav }/>
      </span>
      <span id="logo">
        News Block
      </span>
      <span>
        <SearchBar getNews={ this.getNews } />
      </span>
    </nav>
  </header>
  <div className="timeblock">
    <CurrentDate /> <span>|</span>
    <h2>Today's news for a better world</h2>
  </div>
  <main>

    <div
      id="topnews"
      onClick= { () => this.categoryArticles('general')}
      className="clickable"
    >
      <h1>Top News</h1>
    </div>
    <div id="right-side">
      {
        CATEGORIES_LIST.map(category => (
          <div
            key={category.category}
            className="clickable category"
            style={category.styles}
            onClick={ () => this.categoryArticles(category.category)}
          >
            <h1>{category.category}</h1>
          </div>
        ))
      }
    </div>
  </main>
  <ArticlesModal
          open={this.state.modalOpen}
          articles={this.state.articles}
          closeModal={this.closeModal}
          />
          </div>
)
  }
}

export default Home;

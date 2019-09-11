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
        backgroundColor: "rgb(11, 106, 147)"
      }
    },
    {
      category: 'Health',
      styles: {
        backgroundColor: "rgb(21, 129, 125)"
      }
    },
    {
      category: 'Entertainment',
      styles: {
        backgroundColor: "rgb(74, 143, 149)"
      }
    },
    {
      category: 'Business',
      styles: {
        backgroundColor: "rgb(39, 80, 145)"
      }
    },
    {
      category: 'Technology',
      styles: {
        backgroundColor: "rgb(5, 97, 137)"
      }
    },
    {
      category: 'Science',
      styles: {
        backgroundColor: "rgb(48, 137, 149)"
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
          <CurrentDate /> <span className="dissapear">|</span>
          <h2 className="dissapear">Today's News For a Better World</h2>
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
              CATEGORIES_LIST.map((category, i) => (
                <div
                  key={category.category}
                  className="clickable category"
                  id={`cat${i}`}
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

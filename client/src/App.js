import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import CurrentDate from './components/CurrentDate'
import ArticlesModal from './components/Modal'


const CATEGORIES_LIST = [
  {
    category: 'sports',
    styles: {
      overflow: "hidden",
    }
  },
  {
    category: 'health',
    styles: {
      // height: 50,
      // width: 100,
    }
  },
  {
    category: 'entertainment',
    styles: {
      // height: 50,
      // width: 100,
    }
  },
  {
    category: 'business',
    styles: {
      // height: 50,
      // width: 100,
    }
  },
  {
    category: 'technology',
    styles: {
      // height: 50,
      // width: 100,
    }
  },
  {
    category: 'science',
    styles: {
      // height: 50,
      // width: 100,
    }
  },
]

class App extends React.Component {
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

  categoryArticles = (category) => {
    axios.get(`/api/${category}`)
    .then((response) => this.setState({articles: response.data, modalOpen: true})) 
  }

  render(){
    return (
      <div>
      <header>
        <SearchBar />
        <nav id="navbox">
          <span>
            selection
          </span>
          <span id="logo">
            News Block
          </span>
          <span>
            <SearchBar getNews={ this.getNews() } />
          </span>
        </nav>
      </header>
      <div className="timeblock">
        <CurrentDate /> <span>|</span>
        <h2>Todays news for a better world</h2>
      </div>
      <main>
        <div className="windows">
          <div id="topnews"
            onClick= { () => this.categoryArticles('general')}
            style= {{cursor: 'pointer'}}>
            <h1>Top News</h1>
          </div>
          {
            CATEGORIES_LIST.map( category => {
              return(
                <div 
                  key={category.category}
                  className="winsizes"
                  style={  {...category.styles, cursor: 'pointer'} }
                  onClick= { () => this.categoryArticles(category.category) }>
                    <h1>{category.category}</h1>
                </div>
              )
            })
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

export default App

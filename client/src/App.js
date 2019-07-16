import React from 'react'
import './App.css'
import axios from 'axios'
import Home from './pages/Home'
import CurrentDate from './components/CurrentDate'
import ArticlesModal from './components/Modal'




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
          <div id="topnews">
            <h1>Top News</h1>
          </div>
          {CATEGORIES_LIST.map(category => <div key={category.category} className="winsizes"style={category.styles} ><h1>{category.category}</h1></div>)}
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

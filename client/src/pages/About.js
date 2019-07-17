import React from 'react';
import '../App.css';
import SearchBar from '../components/SearchBar'
import CurrentDate from '../components/CurrentDate'
import DropDown from '../components/DropMenu/DropMenu'
import axios from 'axios'
import ArticlesModal from '../components/Modal.js'

class About extends React.Component {
  state = { 
    showNav: false,
    modalOpen: false,
    articles: []
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

  toggleNav = () => {
    if (this.state.showNav) {
      this.setState({ showNav: false })
    } else {
      this.setState({ showNav: true })
    }
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }
  
  render() {
    return(
    <React.Fragment>
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
        <h2>Todays news for a better world</h2>
      </div>
      <div>
        <h1>About News Block</h1>
        <hr/>
        <h1>Our Mission</h1>
        <p>News Block is designed to be a more streamlined news aggregator, giving you the information you need with less sorting through the articles you don't.</p>
        <h1>The Team</h1>
        <p>Mixolidia Gautreaux</p>
        <p>Timothy Martinez</p>
        <p>Tushar Poojara</p>
        <p>Meade McCoy (UX/UI)</p>
        <h2>Powered by NewsApi</h2>
      </div>
      <ArticlesModal 
        open={this.state.modalOpen}
        articles={this.state.articles}
        closeModal={this.closeModal}
      />
    </React.Fragment>
    )
  }
}

export default About

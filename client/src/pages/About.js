import React from 'react';
import '../App.css';
import SearchBar from '../components/SearchBar'
import CurrentDate from '../components/CurrentDate'
import DropDown from '../components/DropMenu/DropMenu'
import axios from 'axios'

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
  
  render() {
    return(
    <React.Fragment>
    <header>
      <nav id="navbox">
        <span>
          <DropDown toggleNav={ this.toggleNav } show={ this.show }/>
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
    </React.Fragment>
    )
  }
}

export default About

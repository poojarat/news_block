import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import CurrentDate from './components/CurrentDate'

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
  state = { serverMessage: '' }

  getNews = (input) => {
    axios.get(`/search/${input}`)
    .then((response) => console.log(response))
  }

  render(){
    return (
      <div>
      <header>
        <nav id="navbox">
          <span>
            selection
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
      <main>
        <div className="windows">
          <div id="topnews">
            <h1>Top News</h1>
          </div>
          {CATEGORIES_LIST.map(category => <div key={category.category} className="winsizes"style={category.styles} ><h1>{category.category}</h1></div>)}
        </div>
      </main>

    </div>
    )
  }
}

export default App

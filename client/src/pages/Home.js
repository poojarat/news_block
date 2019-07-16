import React from 'react';
import '../App.css';
import SearchBar from '../components/SearchBar'
import CurrentDate from '../components/CurrentDate'
import DropMenu from '../components/DropMenu/DropMenu'
// import { url } from 'inspector';



const CATEGORIES_LIST = [
    {
      category: 'Sports',
      styles: {
        overflow: "hidden",
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
        backgroundColor: "rgb(255, 198, 53)"
      }
    },
    {
      category: 'Technology',
      styles: {
        backgroundColor: "rgb(255, 92, 53)"
      }
    },
    {
      category: 'Science',
      styles: {
        backgroundColor: "rgb(255, 198, 53)"
      }
    },
  ]

const Home = (props) => (
    <div>
      <header>
        <nav id="navbox">
          <span>
            <DropMenu toggleNav={props.toggleNav} show={props.show}/>
          </span>
          <span id="logo">
            News Block
          </span>
          <span>
            <SearchBar getNews={ props.getNews } />
          </span>
        </nav>
      </header>
      <div className="timeblock">
        <CurrentDate /> <span>|</span>
        <h2>Todays News For a Better World</h2>
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

export default Home;

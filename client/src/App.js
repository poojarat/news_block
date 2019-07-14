import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

class App extends React.Component {
  state = { serverMessage: '' }

  componentDidMount(){
    fetch('/api/demo')
      .then(response => response.json())
      .then(data => this.setState({ serverMessage: data.message }))
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
            <form id="resize" action=""> 
              <input id="navsrch" type="search"/>
              <i class="fa fa-search"></i>
            </form>
          </span>
        </nav>
      </header>
      <main>
        <div class="windows">
          <div>
            <h1 onClick="">TEST</h1>
          </div>
          <div>
            <h1>TEST</h1>
          </div>
          <div>
            <h1>TEST</h1>
          </div>
          <div>
            <h1>TEST</h1>
          </div>
          <div>
            <h1>TEST</h1>
          </div>
          <div>
            <h1>TEST</h1>
          </div>
          <div>
            <h1>TEST</h1>
          </div>
          <div>
            <h1>TEST</h1>
          </div>
          <div>
            <h1>TEST</h1>
          </div>
          <div>
            <h1>TEST</h1>
          </div>
          <div>
            <h1>TEST</h1>
          </div>
          <div>
            <h1>TEST</h1>
          </div>  
        </div>
      </main>

    </div>
    )
  }
}

export default App

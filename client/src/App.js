import React from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path ='/' component={Home} />
        <Route exact path ='/about' component={About} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}


export default App

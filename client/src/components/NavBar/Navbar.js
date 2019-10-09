import React from 'react'
import DropDown from './DropMenu/DropMenu'
import SearchBar from './SearchBar';


const NavBar = props => {
  return(
    <header>
      <nav id="navbox">
        <span>
          <DropDown toggleNav={ props.toggleNav } show={ props.show }/>
        </span>
        <span id="logo">
          News Block
        </span>
        <span>
          <SearchBar getNews={ props.getNews } />
        </span>
      </nav>
    </header>
  )
}

export default NavBar

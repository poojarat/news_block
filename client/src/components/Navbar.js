import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => (
      <header>
        <nav id="navbox">
          <span>
          </span>
          <span id="logo">
            News Block
          </span>
          <span>
            <form id="resize" action=""> 
              <input id="navsrch" type="search"/>
              <i className="fa fa-search"></i>
            </form>
          </span>
        </nav>
      </header>
)

export default Navbar;

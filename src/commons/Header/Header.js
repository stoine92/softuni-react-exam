import React from "react";
import './header.css'
import About from '../About'
import {Route, Link, NavLink, Redirect, Switch,} from 'react-router-dom'


function Header() {
  return (
    <div className="header">
      <ul className="header-ul">
        <Route path="/about" component={About}><li><a>Home </a></li></Route>
        <li><a>Login </a></li>
        <li><a>Register </a></li>
        <li><a>Portfolio </a></li>
      </ul>
    </div>
  );
}

export default Header;

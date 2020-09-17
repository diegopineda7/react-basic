import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/styles.css';
import logo from './assets/logo192.png'
import { ImgContext } from './App';

export default class Header extends Component {
  render() {
    return (
      <nav className='header'>
        <ImgContext.Consumer>
          {
            img => img &&
              <Link className='navLink' to='./home'>
                <img src={logo} alt='App logo' />
              </Link>
          }
        </ImgContext.Consumer>
        <Link className='navLink' to='./home'>HOME</Link>
        <Link className='navLink' to='./todo'>TODO APP</Link>
        <Link className='navLink' to='./fetch'>FETCH DATA</Link>
        <Link className='navLink' to='./counter'>COUNTER</Link>
        <Link className='navLink' to='./clock'>CLOCK</Link>
      </nav>
    )
  }
}

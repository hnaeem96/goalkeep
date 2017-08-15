import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

class Navbar extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="navbar">
        <div className="container">
          <a className="logo">GoalKeep</a>
          <div className="menu-list">
            <span className="menu">
              <ul>
                <a className="nav-a nav-home"><li>Home</li></a>
                <a className="nav-a nav-about"><li>About</li></a>
                <a className="nav-a nav-about" onClick={() => this.signOut()}><li>Log Out</li></a>
              </ul>
            </span>
            <a className="mobile-menu"><img src="images/mobile-menu.svg" alt="Menu" /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;

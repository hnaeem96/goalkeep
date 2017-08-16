import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

import '../styles/Navbar.css';

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
                <a className="nav-a"><li>Home</li></a>
                <a className="nav-a"><li>About</li></a>
                <a className="nav-a" onClick={() => this.signOut()}><li>Log Out</li></a>
              </ul>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;

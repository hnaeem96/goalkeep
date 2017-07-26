import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return(
      <div>
        App
        <button
          className="btn log-out"
          onClick={() => this.signOut()}
        >
          Log Out
        </button>
      </div>
    );
  }
}

export default App;

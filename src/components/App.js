import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return(
      <div>
        <div>
          <h3>Goals</h3>
          <div>Add Goal</div>
          <div>Goal List</div>
        </div>
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

function mapStateToProps(state) {

}

export default App;

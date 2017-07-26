import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';

import AddGoal from './AddGoal'

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return(
      <div>
        <div>
          <h3>Goals</h3>
          <AddGoal />
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

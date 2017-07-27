import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';

import AddGoal from './AddGoal';
import GoalList from './GoalList';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return(
      <div>
        <div>
          <h3>GoalKeep</h3>
          <AddGoal />
          <hr />
          <h4>List of Goals</h4>
          <GoalList />
        </div>
        <hr />
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

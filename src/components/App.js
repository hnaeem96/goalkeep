import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Navbar from './Navbar';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <div>
          <h3>GoalKeep</h3>
          <AddGoal />
          <hr />
          <h4>List of Goals</h4>
          <GoalList />
        </div>
        <hr />
        <h3>Completed Goals</h3>
        <CompleteGoalList />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {}
// }

export default App;

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
        <AddGoal />
        <GoalList />
        <CompleteGoalList />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {}
// }

export default App;

import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Navbar from './Navbar';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

import '../styles/App.css';

class App extends Component {
  render() {
    return(
      <div className="main-app">
        <Navbar />
        <AddGoal />
        <hr />
        <GoalList />
        <hr className="goal-divider" />
        <CompleteGoalList />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {}
// }

export default App;

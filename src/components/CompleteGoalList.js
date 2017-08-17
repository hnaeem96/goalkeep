import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompletedGoals } from '../actions';
import { completeGoalRef } from '../firebase';

import '../styles/GoalItem.css';

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completedGoals = [];
      snap.forEach(goal => {
        const { email, title } = goal.val();
        completedGoals.push({email, title});
      });
      this.props.setCompletedGoals(completedGoals);
    });
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    return (
      <section className="completed-goals">
        <div className="container">
          <h4>Completed Goals</h4>
          {
            this.props.completedGoals.map((goal, index) => {
              const { title, email } = goal;
              return (
                <div key={index} className="goal-item">
                  <span className="goal-title">{title}</span>
                  <span className="goal-email"><em>{email}</em></span>
                </div>
              )
            })
          }
          <button
            className="list-btn"
            onClick={() => this.clearCompleted()}
            >
            Clear
          </button>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  const { completedGoals} = state;
  return {
    completedGoals
  }
}

export default connect(mapStateToProps, { setCompletedGoals })(CompleteGoalList);

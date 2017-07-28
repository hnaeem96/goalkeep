import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompletedGoals } from '../actions';
import { completeGoalRef } from '../firebase';

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
      <div>
        {
          this.props.completedGoals.map((goal, index) => {
            const { title, email } = goal;
            return (
              <div key={index}>
                <strong>{title}</strong> completed by <em>{email}</em>
              </div>
            )
          })
        }
        <button
          className="btn"
          onClick={() => this.clearCompleted()}
          >
          Clear
        </button>
      </div>
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

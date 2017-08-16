import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef, completeGoalRef, deleteGoalRef } from '../firebase';

import '../styles/GoalItem.css';

class GoalItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }

  completeGoal() {
    const { email, title, serverKey } = this.props.goal;
      completeGoalRef.push({email, title});
      goalRef.child(serverKey).remove();
  };

  copyGoal() {
    const { email } = this.props.user;
    const { title } = this.props.goal;
    goalRef.push({email, title});
  }

  deleteGoal() {
    const { email, title, serverKey } = this.props.goal;
      deleteGoalRef.push({email, title});
      goalRef.child(serverKey).remove();
  }

  render() {
    const { email, title } = this.props.goal;

    return (
      <div className="goal-item">
        <span className="goal-title">{title}</span>
        <span><em>{email}</em></span>
        {
          (email === this.props.user.email) ?
          <span>
            <button
              className="unicode-btn"
              onClick={() => this.completeGoal()}
            >
                &#10003;
            </button>
            <button
              className="unicode-btn"
              onClick={() => this.deleteGoal()}
            >
                &#10005;
            </button>
          </span> :
          <span>
            <button
              className="btn"
              onClick={() => this.copyGoal()}
            >
                  Copy Goal
            </button>
          </span>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(GoalItem);

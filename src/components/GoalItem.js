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
        <div className="title-row">
          <span className="goal-title">{title}</span>
        </div>
        <div className="buttons-row">
          <span className="goal-email"><em>{email}</em></span>
          {
            (email === this.props.user.email) ?
            <span>
              <button
                className="unicode-btn complete"
                onClick={() => this.completeGoal()}
              >
                  &#10003;
                  <span className="tooltip">Complete</span>
              </button>
              <button
                className="unicode-btn delete"
                onClick={() => this.deleteGoal()}
              >
                  &#10005;
                  <span className="tooltip">Delete</span>
              </button>
            </span> :
            <span>
              <button
                className="unicode-btn copy-btn"
                onClick={() => this.copyGoal()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 561 561">
                  <path d="M395.3 0h-306c-28 0-51 23-51 51v357h51V51h306V0zm76.4 102H191.4c-28 0-51 23-51 51v357c0 28 23 51 51 51h280.4c28 0 51-23 51-51V153c0-28-23-51-51-51zm0 408H191.4V153h280.4v357z" fill="#FFFFFF"/>
                </svg>
                <span className="tooltip">Copy</span>
              </button>
            </span>
          }
        </div>
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

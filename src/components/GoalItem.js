import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef, completeGoalRef, deleteGoalRef } from '../firebase';

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
      <div>
        <strong>{title}</strong>
        <span>made by <em>{email}</em></span>
        <button>Like</button>
        <span>{}</span>
        {
          (email === this.props.user.email) ?
          <div>
            <button
              className="btn"
              onClick={() => this.completeGoal()}
            >
                Complete
            </button>
            <button
              className="btn"
              onClick={() => this.deleteGoal()}
            >
                Delete
            </button>
          </div> :
          <div>
            <button
              className="btn"
              onClick={() => this.copyGoal()}
            >
                  Copy Goal
            </button>
          </div>
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

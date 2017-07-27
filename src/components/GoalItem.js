import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef, completeGoalRef } from '../firebase';

class GoalItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }

  completeGoal() {
    const { email, title, serverKey } = this.props.goal;
    if (email === this.props.user.email) {
      completeGoalRef.push({email, title});
      goalRef.child(serverKey).remove();
    } else {
      this.setState({error: "This goal hasn't been made by you!"});
    }
  };

  render() {
    const { email, title } = this.props.goal;

    return (
      <div>
        <strong>{title}</strong>
        <span>made by <em>{email}</em></span>
        <button
          className="btn"
          onClick={() => this.completeGoal()}
        >
            Complete
        </button>
        <button
          className="btn"
        >
            Delete
        </button>
        <div>{this.state.error}</div>
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

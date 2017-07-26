import React, { Component } from 'react';

class GoalItem extends Component {
  render() {
    const { email, title } = this.props.goal;

    return (
      <div>
        <strong>{title}</strong>
        <span>made by <em>{email}</em></span>
      </div>
    )
  }
}

export default GoalItem;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      error: 0
    }
  }

  addGoal() {
    const { title } = this.state;
    const { email } = this.props.user;
    if (title !== "") {
      goalRef.push({email, title});
      this.setState({error: 0});
    } else {
      this.setState({error: 1});
    }
  }

  render() {
    return (
      <div className="form">
        <div className="inner-form">
          <input
            className="add-goal"
            type="text"
            placeholder="Add a goal"
            onChange={event => this.setState({title: event.target.value})}
          />
          <button
            className="btn"
            type="button"
            onClick={() => this.addGoal()}
          >
              Submit
            </button>
        </div>
        {
          this.state.error === 1 ?
          <div>Goal cannot be empty!</div> :
          null
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

export default connect(mapStateToProps, null)(AddGoal);

import React, { Component } from 'react';

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="form">
        <div className="inner-form">
          <input
            className="add-goal"
            type="text"
            placeholder="Add a goal"
            style={{marginRight: '5px'}}
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
      </div>
    )
  }
}

export default AddGoal;

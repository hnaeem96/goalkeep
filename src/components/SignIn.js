import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

import '../styles/SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  signIn() {
    const { email, password } = this.state;

    //Run Firebase Auth
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error: error.message});
        console.log('Error', error);
      });
  }

  render() {
    return(
      <div>
        <h1>Goal Keep</h1>
        <form className="form">
          <div className="inner-form">
            <h4>Sign In</h4>
            <input
              className="email"
              type="email"
              placeholder="Email"
              onChange={event => this.setState({email: event.target.value})}
            />
            <input
              className="password"
              type="password"
              placeholder="Password"
              onChange={event => this.setState({password: event.target.value})}
            />
            <div className="sign-up-link"><Link to={'/signup'}>Don't have an account? Click here to sign up</Link></div>
          </div>
          <input
            className="btn"
            type="submit"
            value="Enter"
            onClick={() => this.signIn()}
          />
          <div>{this.state.error}</div>
        </form>
      </div>
    );
  }
}

export default SignIn;

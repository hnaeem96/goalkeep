import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    }
  }

  signUp() {
    const { email, password, confirmPassword } = this.state;

    if (password === confirmPassword) {
      //Run Firebase Auth
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => {
          this.setState({error: error.message});
          console.log('Error', error);
        });
    } else {
      this.setState({error: "Passwords don't match."})
    }
  }

  render() {
    return(
      <div>
        <section className="sign-up">
          <h1>GoalKeep, keep and seek goals.</h1>
          <div className="form">
            <div className="inner-form">
              <h4>Sign Up</h4>
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
              <input
                className="password"
                type="password"
                placeholder="Confirm Password"
                onChange={event => this.setState({confirmPassword: event.target.value})}
              />
              {
                this.state.error !== '' ? <div className="error">{this.state.error}</div> : null
              }
              <div className="sign-link"><Link to={'/signin'}>Already have an account? Click here to sign in</Link></div>
            </div>
            <input
              className="btn"
              type="submit"
              value="Create Account"
              onClick={() => this.signUp()}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default SignUp;

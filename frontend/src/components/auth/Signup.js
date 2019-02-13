import React, { Component } from 'react';

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    // console.log(name, ':', value);
  };

  render() {
    return (
      <div className="App">
        <h2 className="App">Signup</h2>
        <form className="form">
          <label htmlFor="username">
            Username
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="passwordConfirmation">
            Confirm Password
            <input
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
          </label>
          <div>
            <button type="button" className="button-primary">
              Signup
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;

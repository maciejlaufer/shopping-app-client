import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions } from 'actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.props.auth.isLoggedIn) {
      console.log('auth', this.props.auth);
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.loginUser(username, password);
    }
  }

  render() {
    if (this.props.auth.isLoggedIn) {
      return <Redirect to="/" />;
    }
    const { username, password, submitted } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {username}
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          {password}
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
// function mapDispatchToProps(dispatch) {
//   return {
//     loginUser: (username, password) =>
//       dispatch(authActions.loginUser(username, password))
//   };
// }

export default connect(
  mapStateToProps,
  authActions
)(Login);

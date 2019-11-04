import React, { useState } from 'react';
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
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password, submitted } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}

function mapDispatchToProps() {
  return {
    authActions
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Login);

import React from 'react';
import { connect } from 'react-redux';
import { authActions } from 'actions';

class Login extends React.Component {
  render() {
    console.log('actions', this.props);
    return <div>Hello from Login</div>;
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

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const currentUser = rest.auth;
      if (!currentUser.isLoggedIn) {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }

      if (roles && roles.indexOf(currentUser.role) === -1) {
        return <Redirect to={{ pathname: "/" }} />;
      }

      return <Component {...props} />;
    }}
  />
);

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(PrivateRoute);

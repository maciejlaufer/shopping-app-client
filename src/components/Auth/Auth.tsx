import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, Link, NavLink } from 'react-router-dom';

import styles from './Auth.module.scss';
import authActions from 'store/auth/actions';
import { StandardInput } from 'components/Shared';

import { AuthState } from 'store/auth/types';
import { ApplicationState } from 'store';

import logo from 'assets/images/logo.png';
import Login from './Login/Login';
import Register from './Register/Register';

interface Props {
  match: any;
  location: any;
}

const Auth: React.FC<Props> = ({ match, location }) => {
  console.log('auth props', match);

  const authState = useSelector(
    (state: ApplicationState): AuthState => state.auth
  );

  if (authState.isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div
      className={`${styles.Auth__Wrapper} d-flex flex-column flex-fill justify-content-center`}
    >
      <div
        className={`${styles.Auth__Box} p-md-5 d-flex flex-column align-items-center`}
      >
        <img
          className={`${styles.Auth__Logo} d-block pb-3`}
          src={logo}
          alt="App logo"
        />
        <div className={`${styles.Navigation} pb-5`}>
          <NavLink
            className={`${styles.Navigation__Button} ${styles.Navigation__Button___Left} d-inline-block w-50 text-center`}
            activeClassName={styles.Navigation__Button___Active}
            to="login"
          >
            Login
          </NavLink>
          <NavLink
            className={`${styles.Navigation__Button} ${styles.Navigation__Button___Right} d-inline-block w-50 text-center`}
            activeClassName={styles.Navigation__Button___Active}
            to="register"
          >
            Register
          </NavLink>
        </div>
        <div className={`${styles.Auth__Form} w-100 px-5`}>
          <Route path={`${match.url}/login`} component={Login} />
          <Route path={`${match.url}/register`} component={Register} />
          <Route
            exact
            path={`${match.url}`}
            render={() => <Redirect to={`${match.url}/login`} />}
          />
        </div>
      </div>
    </div>
  );
};

// function mapStateToProps(state: any) {
//   return {
//     auth: state.auth
//   };
// }

// function mapDispatchToProps(dispatch: any) {
//   return {
//     loginUser: (username: string, password: string) =>
//       dispatch(authActions.loginUser(username, password))
//   };
// }

// export default connect(mapStateToProps, authActions)(Login);

export default Auth;

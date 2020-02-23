import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './Login.scss';
import authActions from 'store/auth/actions';
import { StandardInput } from 'components/Shared';

import { AuthState } from 'store/auth/types';
import { ApplicationState } from 'store';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const authState = useSelector(
    (state: ApplicationState): AuthState => state.auth
  );

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (username && password) {
      dispatch(
        authActions.startUserAuthenticationRequest({ username, password })
      );
    }
  };

  if (authState.isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="login-page">
      <div className="login-page__wrapper">
        <div className="login-page__form-box">
          <form className="login-page__form" onSubmit={handleSubmit}>
            {authState.loading ? 'loading' : 'not loading'}
            {username}
            <StandardInput
              type="text"
              name="username"
              value={username}
              onChange={handleLoginChange}
            />
            {password}
            <StandardInput
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit" disabled={isSubmitted}>
              Login
            </button>
          </form>
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

export default Login;

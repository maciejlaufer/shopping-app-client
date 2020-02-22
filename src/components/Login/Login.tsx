import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions } from 'actions';
import { StandardInput } from 'components/Shared';
import './Login.scss';

type Props = {
  auth: any;
  loginUser: (username: string, password: string) => void;
};

//TODO: refactor to use function component with hooks
const Login: React.FC<Props> = (props: Props) => {
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
      props.loginUser(username, password);
    }
  };

  if (props.auth.isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="login-page">
      <div className="login-page__wrapper">
        <div className="login-page__form-box">
          <form className="login-page__form" onSubmit={handleSubmit}>
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

function mapStateToProps(state: any) {
  return {
    auth: state.auth
  };
}

// function mapDispatchToProps(dispatch: any) {
//   return {
//     loginUser: (username: string, password: string) =>
//       dispatch(authActions.loginUser(username, password))
//   };
// }

export default connect(mapStateToProps, authActions)(Login);

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StandardInput, StandardButton } from 'components/Shared';
import authActions from 'store/auth/actions';

interface Props {
  match: any;
  location: any;
}

const Login: React.FC<any> = () => {
  const dispatch = useDispatch();

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

  return (
    <form className={`d-block w-100`} onSubmit={handleSubmit}>
      <StandardInput
        className={`mb-3`}
        type="text"
        name="username"
        value={username}
        placeholder="Login"
        onChange={handleLoginChange}
      />
      <StandardInput
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      <StandardButton type="button">Login</StandardButton>
    </form>
  );
};

export default Login;

import React, { useState } from 'react';
import { StandardButton, StandardInput } from 'components/Shared';
import { useDispatch, useSelector } from 'react-redux';
import registerActions from 'store/register/actions';
import { ApplicationState } from 'store';
import { RegisterState } from 'store/register/types';

interface Props {}

const Register: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const registerState = useSelector(
    (state: ApplicationState): RegisterState => state.register
  );

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [passwordMatchError, setPasswordMatchError] = useState<any>('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (registerState.errors.email) {
      dispatch(
        registerActions.userRegistrationError({
          errors: {
            ...registerState.errors,
            email: '',
          },
        })
      );
    }
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    checkPasswordMatch(event.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
    checkPasswordMatch(password, event.target.value);
  };

  const checkPasswordMatch = (
    password: string,
    confirmPassword: string
  ): void => {
    if (password !== confirmPassword && confirmPassword) {
      setPasswordMatchError('Password must match');
    } else {
      setPasswordMatchError('');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(
      registerActions.startUserRegistrationRequest({
        email,
        password,
        firstName,
        lastName,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="d-block text-center w-100">
      <StandardInput
        typeName="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={handleEmailChange}
      />
      {
        <div className={`text-left pl-4 mt-1 text-danger text-small`}>
          {registerState.errors.email}
        </div>
      }
      <StandardInput
        className={`mt-3`}
        typeName="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      {
        <div className={`text-left pl-4 mt-1 text-danger text-small`}>
          {registerState.errors.password}
        </div>
      }
      <StandardInput
        className={`mt-3`}
        typeName="password"
        name="confirmPassword"
        value={confirmPassword}
        placeholder="Confirm password"
        onChange={handleConfirmPasswordChange}
      />
      {
        <div className={`text-left pl-4 mt-1 text-danger text-small`}>
          {passwordMatchError}
        </div>
      }
      <StandardInput
        className={`mt-3`}
        typeName="text"
        name="firstName"
        value={firstName}
        placeholder="First name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <StandardInput
        className={`mt-3`}
        typeName="text"
        name="lastName"
        value={lastName}
        placeholder="Last name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <StandardButton
        className={`mt-4`}
        type="submit"
        loading={registerState.loading}
        disabled={
          !email ||
          !password ||
          !confirmPassword ||
          passwordMatchError['confirmPassword']
        }
      >
        Register
      </StandardButton>
    </form>
  );
};

export default Register;

import React, { useState } from 'react';
import { StandardButton, StandardInput } from 'components/Shared';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface Props {}

const Register: React.FC<Props> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //
  };

  return (
    <form onSubmit={handleSubmit} className="d-block text-center w-100">
      <StandardInput
        className={`mb-3`}
        typeName="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={handleEmailChange}
      />
      <StandardInput
        className={`mb-3`}
        typeName="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      <StandardInput
        className={`mb-3`}
        typeName="password"
        name="confirmPassword"
        value={confirmPassword}
        placeholder="Confirm password"
        onChange={handleConfirmPasswordChange}
      />
      <StandardInput
        className={`mb-3`}
        typeName="text"
        name="firstName"
        value={firstName}
        placeholder="First name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <StandardInput
        className={`mb-3`}
        typeName="text"
        name="lastName"
        value={lastName}
        placeholder="Last name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <StandardButton className={`mt-4`} type="submit">
        Register
      </StandardButton>
    </form>
  );
};

export default Register;

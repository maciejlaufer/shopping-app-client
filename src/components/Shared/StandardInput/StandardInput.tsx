import React, { useState } from 'react';
import styles from './StandardInput.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
type Props = {
  typeName: string;
  name: string;
  value: string;
  position?: 'left' | 'center';
  placeholder?: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StandardInput: React.FC<Props> = ({
  typeName,
  name,
  value,
  placeholder,
  position,
  className,
  onChange,
}) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <div
      className={`${className} ${styles.StandardInput} text-${position} w-100 position-relative`}
    >
      <input
        type={
          typeName !== 'password'
            ? typeName
            : passwordVisible
            ? 'text'
            : 'password'
        }
        name={name}
        className={`${styles.StandardInput__Input} text-${position}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span
        className={`${
          name !== 'password' && name !== 'confirmPassword' && 'd-none'
        } position-absolute ${styles.StandardInput__Icon}`}
        onClick={() => setPasswordVisible(!passwordVisible)}
      >
        <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
      </span>
    </div>
  );
};

StandardInput.defaultProps = {
  position: 'left',
};

export default StandardInput;

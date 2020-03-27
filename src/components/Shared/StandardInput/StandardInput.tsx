import React from 'react';
import styles from './StandardInput.module.scss';
type Props = {
  type: string;
  name: string;
  value: string;
  position?: 'left' | 'center';
  placeholder?: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StandardInput: React.FC<Props> = ({
  type,
  name,
  value,
  placeholder,
  position,
  className,
  onChange
}) => (
  <div
    className={`${className} ${styles.StandardInput} text-${position} w-100`}
  >
    <input
      type={type}
      name={name}
      className={`${styles.StandardInput__Input} text-${position}`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

StandardInput.defaultProps = {
  position: 'left'
};

export default StandardInput;

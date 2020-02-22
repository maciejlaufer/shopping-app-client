import React from 'react';
import styles from './StandardInput.module.scss';
type Props = {
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StandardInput: React.FC<Props> = ({ type, name, value, onChange }) => (
  <input
    type={type}
    name={name}
    className={styles.StandardInput}
    value={value}
    onChange={onChange}
  />
);

export default StandardInput;

import React, { ReactNode } from 'react';
import styles from './StandardButton.module.scss';

interface Props {
  type: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
  onClick?: Function;
}

const StandardButton: React.FC<Props> = ({
  type,
  className,
  disabled,
  loading,
  children,
  onClick
}) => {
  return (
    <button
      onClick={e => onClick && onClick(e)}
      className={`${className} ${styles.Button} d-inline-block bg-primary text-white`}
      type={type}
      disabled={disabled}
    >
      {loading ? 'loading...' : children}
    </button>
  );
};

export default StandardButton;

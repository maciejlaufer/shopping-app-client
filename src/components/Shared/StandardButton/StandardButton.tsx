import React, { ReactNode } from 'react';

interface Props {
  type: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
}

const StandardButton: React.FC<Props> = ({
  type,
  className,
  disabled,
  loading,
  children
}) => {
  return (
    <button className={className} type={type} disabled={disabled}>
      {loading ? 'loading...' : children}
    </button>
  );
};

export default StandardButton;

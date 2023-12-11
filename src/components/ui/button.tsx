import React, { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
};

const Button = ({ className, onClick, disabled, loading, children }: Props) => {
  return (
    <button
      className={clsx(className, {
        "opacity-50 cursor-not-allowed": disabled || loading,
      })}
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
    >
      {loading ? <span>Loading...</span> : children}
    </button>
  );
};

export default Button;

import { ButtonHTMLAttributes } from "react";

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...restProps
}) => (
  <button
    className={`px-4 py-2 rounded bg-gray-100 text-gray-500 hover:bg-indigo-700 hover:text-white ${className}`}
    {...restProps}
  >
    {children}
  </button>
);

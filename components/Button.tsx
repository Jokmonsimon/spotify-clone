import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          'w-full rounded-md bg-blue-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-75 text-black font-bold hover:opacity-75 transition',
          className
        )}
      >
        Sign Up
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

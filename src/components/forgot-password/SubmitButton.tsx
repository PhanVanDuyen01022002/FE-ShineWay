import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function SubmitButton({ children, ...props }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      {...props}
      className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition disabled:bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
}

export default SubmitButton;

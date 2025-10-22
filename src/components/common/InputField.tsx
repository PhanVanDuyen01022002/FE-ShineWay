import type { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  message?: string;
  label: string;
  id: string;
}

function InputField({ message, label, id, ...props }: InputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-800 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
      {message && <span className="text-red-500 text-sm">{message}</span>}
    </div>
  );
}

export default InputField;

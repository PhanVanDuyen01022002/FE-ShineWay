import React from 'react';

// Định nghĩa kiểu cho props
interface LoginInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ElementType;
}

const LoginInput: React.FC<LoginInputProps> = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative w-full">
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        {...props}
        className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-3 text-gray-800 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
};

export default LoginInput;

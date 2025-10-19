import type { ReactNode } from 'react';

interface FormHeaderProps {
  title: string;
  children: ReactNode;
}

function FormHeader({ title, children }: FormHeaderProps) {
  return (
    <div className="text-left">
      <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h1>
      <p className="text-gray-500">{children}</p>
    </div>
  );
}

export default FormHeader;

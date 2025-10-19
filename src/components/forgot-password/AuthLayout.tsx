import type { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-sky-50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-sm sm:p-12">{children}</div>
    </main>
  );
}

export default AuthLayout;

import LoginForm from '../components/login/LoginForm.tsx';
import LoginIntroduce from '../components/login/LoginIntroduce.tsx';

function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-xl py-[60px]">
        <div className="hidden md:flex flex-col items-center justify-center bg-white text-center relative border-r">
          <LoginIntroduce />
        </div>

        <div className="flex flex-col justify-center bg-white ">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}

export default Login;

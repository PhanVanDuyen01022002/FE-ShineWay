import { useState } from 'react';
import ResetPasswordForm from '../components/reset-password/ResetPasswordForm.tsx';
import ResetPasswordDescription from '../components/reset-password/ResetPasswordDescription.tsx';
import { message } from 'antd';
import { Link } from 'react-router-dom';

function ResetPassword() {
  const [messageApi, contextHolder] = message.useMessage();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    console.log('123');

    e.preventDefault();
    if (password !== confirmPassword) messageApi.error('Mật khẩu không trùng khớp!', 3);
    else messageApi.success('Cập nhật thành công!');
  };

  return (
    <>
      {contextHolder}
      <div className="relative flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <form
          onSubmit={handleSubmit}
          className="relative z-10 w-full max-w-4xl rounded-xl bg-white p-8 shadow-2xl md:p-12 overflow-hidden"
        >
          <div
            className="absolute top-0 right-0 h-20 w-[380px] bg-blue-500 [clip-path:polygon(100%_0,_0_0,_40%_100%,_100%_100%)]"
            aria-hidden="true"
          ></div>
          <h1 className="mb-8 text-3xl font-bold text-gray-800">Quên mật khẩu</h1>

          <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
            <ResetPasswordForm
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />

            <ResetPasswordDescription />
          </div>

          <div className="mt-10 flex justify-between items-end">
            <button
              type="submit"
              disabled={!password.trim() || !confirmPassword.trim()}
              className="disabled:bg-blue-300 rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Cập nhật
            </button>
            <Link to="/login" className="underline text-sm text-blue-600">
              Đi đến trang đăng nhập
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;

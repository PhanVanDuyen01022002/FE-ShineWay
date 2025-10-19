import { Lock, Mail } from 'lucide-react';
import LoginInput from './LoginInput.tsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPermissions } from '../../store/authSlice.ts';
import { fakePermissions } from '../../data/fakePermissions.ts';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const permissions = fakePermissions;
      dispatch(setPermissions(permissions));
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };
  return (
    <div className="mx-auto w-full max-w-md">
      <h2 className="mb-3 text-4xl font-bold text-gray-800">Đăng Nhập</h2>
      <p className="mb-10 text-gray-500">
        Vui lòng đăng nhập để trải nghiệm các tiện ích của <span className="font-semibold text-sky-600">ShineWay</span>
      </p>

      <form className="space-y-6" onSubmit={handleLogin}>
        <LoginInput
          id="email"
          type="email"
          placeholder="Tên email"
          icon={Mail}
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <LoginInput
          id="password"
          type="password"
          placeholder="Mật khẩu"
          icon={Lock}
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <div className="text-right">
          <a href="#" className="text-sm font-medium text-sky-600 hover:underline">
            Quên mật khẩu ?
          </a>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Đăng Nhập
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

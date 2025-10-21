import { Eye, EyeOff } from 'lucide-react';
import { useState, type Dispatch, type SetStateAction } from 'react';

interface ResetPasswordFormProps {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
}

function ResetPasswordForm({ password, setPassword, confirmPassword, setConfirmPassword }: ResetPasswordFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-semibold text-gray-700">
          Mật khẩu mới
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border-none bg-gray-100 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nhập mật khẩu của bạn"
          required
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="mb-2 block text-sm font-semibold text-gray-700">
          Nhập lại mật khẩu
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-lg border-none bg-gray-100 px-4 py-3 pr-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập lại mật khẩu"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-blue-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordForm;

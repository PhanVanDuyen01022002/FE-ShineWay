import { useState } from 'react';
import InputField from '../components/common/InputField.tsx';
import AuthLayout from '../components/forgot-password/AuthLayout.tsx';
import FormHeader from '../components/forgot-password/FormHeader.tsx';
import SubmitButton from '../components/forgot-password/SubmitButton.tsx';
import VerificationCheckbox from '../components/forgot-password/VerificationCheckbox.tsx';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmitForgot = (e: any) => {
    e.preventDefault();
    if (!email.trim()) {
      setMessage('Vui lòng không để trống email!');
      return;
    }

    alert('Đang gửi yêu cầu!');
  };

  return (
    <AuthLayout>
      <FormHeader title="Quên mật khẩu">
        Vui lòng nhập Email được cấp trên nền tảng <span className="font-semibold text-sky-600">ShineWay</span>
      </FormHeader>

      <form className="mt-10 w-full space-y-8" onSubmit={handleSubmitForgot}>
        <InputField
          message={message}
          label="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <VerificationCheckbox isChecked={isChecked} setIsChecked={setIsChecked} />
        <SubmitButton disabled={!isChecked}>Gửi mã xác nhận</SubmitButton>
      </form>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;

import { useState } from 'react';
import InputField from '../components/common/InputField.tsx';
import AuthLayout from '../components/forgot-password/AuthLayout.tsx';
import FormHeader from '../components/forgot-password/FormHeader.tsx';
import SubmitButton from '../components/forgot-password/SubmitButton.tsx';
import VerificationCheckbox from '../components/forgot-password/VerificationCheckbox.tsx';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store.ts';
import { setEmailForgot } from '../store/authSlice.ts';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import OTPCountdown from '../components/forgot-password/OTPCountdown.tsx';

const ForgotPasswordPage = () => {
  const { emailForgot } = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState('');
  const [otp, setOtp] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmitForgot = (e: any) => {
    e.preventDefault();
    if (!email.trim()) {
      setMessage('Vui lòng không để trống email!');
      return;
    }

    dispatch(setEmailForgot(email));
  };

  const handleSubmitOtp = () => {};

  return (
    <>
      {emailForgot ? (
        <AuthLayout>
          <FormHeader title="Quên mật khẩu">Vui lòng kiểm tra mã OTP được gửi đến email của bạn.</FormHeader>

          <form className="mt-10 w-full space-y-8" onSubmit={handleSubmitOtp}>
            <Input.OTP rootClassName="w-full" prefixCls="custom-otp" value={otp} onInput={(e) => setOtp(e.join(''))} />

            <div className="flex justify-between">
              <Link to="#" className="underline">
                Chưa nhận mã?
              </Link>
              <OTPCountdown duration={60} />
            </div>

            <SubmitButton disabled={!(otp.length === 6)}>Xác nhận</SubmitButton>
          </form>
        </AuthLayout>
      ) : (
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
      )}
    </>
  );
};

export default ForgotPasswordPage;

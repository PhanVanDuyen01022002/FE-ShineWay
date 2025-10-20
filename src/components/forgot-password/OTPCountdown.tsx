import { useState, useEffect, type Dispatch, type SetStateAction } from 'react';

interface OTPCountdownProps {
  duration: number;
}

function OTPCountdown({ duration = 60 }: OTPCountdownProps) {
  const [reCount, setReCount] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const saved = localStorage.getItem('otp_expiry');
    const expiry = saved ? parseInt(saved, 10) : 0;
    const diff = Math.floor((expiry - Date.now()) / 1000);
    return diff > 0 ? diff : 0;
  });

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(1, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  useEffect(() => {
    // Nếu chưa có expiry hoặc đã hết hạn => lưu mới
    if (!localStorage.getItem('otp_expiry') || timeLeft <= 0) {
      const expiry = Date.now() + duration * 1000;
      localStorage.setItem('otp_expiry', expiry.toString());
      setTimeLeft(duration);
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          localStorage.removeItem('otp_expiry');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [reCount]);
  return (
    <button type="button" disabled={duration !== 0} className={`text-sky-600 ${!(timeLeft > 0) && 'cursor-pointer'}`}>
      {timeLeft > 0 ? `Thử lại sau: ${minutes}:${seconds}` : 'Có thể gửi lại mã'}
    </button>
  );
}

export default OTPCountdown;

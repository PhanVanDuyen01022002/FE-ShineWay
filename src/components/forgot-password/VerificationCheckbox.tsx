import type { Dispatch, SetStateAction } from 'react';
import cloudflareLogo from '../../assets/images/cloudflare-image.png';

interface VerificationCheckboxProps {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

function VerificationCheckbox({ isChecked, setIsChecked }: VerificationCheckboxProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-gray-50 p-2.5">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id="human-verification"
          className="h-5 w-5 rounded border-gray-400 text-blue-600 focus:ring-blue-500"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="human-verification" className="text-gray-700">
          Verify you are human
        </label>
      </div>
      <img src={cloudflareLogo} alt="cloudflare-image" className="max-w-[166px]" />
    </div>
  );
}

export default VerificationCheckbox;

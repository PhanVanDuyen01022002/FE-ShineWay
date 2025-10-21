function ResetPasswordDescription() {
  return (
    <div className="pt-2">
      <ul className="space-y-2 text-sm text-gray-600">
        <li>* Mật khẩu phải dài hơn 8 ký tự</li>
        <li>* Tồn tại ít nhất 1 ký tự in hoa</li>
        <li>* Tồn tại ít nhất 1 ký tự thường</li>
        <li>* Tồn tại ít nhất 1 ký tự đặc biệt</li>
      </ul>
    </div>
  );
}

export default ResetPasswordDescription;

import foodImage from '../../assets/images/dish-2_1.png';

function LoginIntroduce() {
  return (
    <>
      <div className="w-full max-w-sm">
        <h1 className="text-5xl font-bold text-sky-600">ShineWay</h1>

        <div className="my-10">
          <img src={foodImage} alt="Som Tum Thai" className="w-full h-auto object-contain max-w-[300px] mx-auto" />
        </div>
      </div>
      <p className="absolute bottom-0 text-gray-500">
        <span className="font-bold text-sky-600">ShineWay</span> – Nền tảng thông minh cho dịch vụ nhà hàng vượt trội
      </p>
    </>
  );
}

export default LoginIntroduce;

import ChevronLeftCustom from '../../../assets/logos/chevron-left-custom.svg?react';
import OrderMenutableSection from '../components/OrderMenutableSection.tsx';
import OrderPaymentSection from '../components/OrderPaymentSection.tsx';

function OrderPage() {
  return (
    <div className="w-[1310px]">
      <div className="mb-10 inline-flex items-center gap-2 text-primary-500 font-bold text-base text-pr cursor-pointer">
        <ChevronLeftCustom />
        Quay lại
      </div>

      <div className="flex gap-7">
        {/* RIGHT-SECTION */}
        <OrderMenutableSection />

        {/* Payment */}
        <OrderPaymentSection />
      </div>
    </div>
  );
}

export default OrderPage;

import OrderMenuCard from './OrderMenuCard.tsx';
import OrderTableCard from './OrderTableCard.tsx';

function OrderMenutableSection() {
  return (
    <div className="w-[827px] flex flex-col gap-[22px]">
      {/* Orders */}
      <OrderMenuCard />

      {/* SELECT TABLE */}
      <OrderTableCard />
    </div>
  );
}

export default OrderMenutableSection;

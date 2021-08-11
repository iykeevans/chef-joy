import OrderProgressItem from "./order-progress-item";
import Line from "../line.svg";

function OrderProgress() {
  return (
    <div className="flex items-center justify-center mb-12">
      <OrderProgressItem name="Cart" number="1" />
      <Line className="ml-4 mr-2" />
      <OrderProgressItem name="Address" number="2" />
      <Line className="ml-4 mr-2" />
      <OrderProgressItem name="Payments" number="3" />
    </div>
  );
}

export default OrderProgress;

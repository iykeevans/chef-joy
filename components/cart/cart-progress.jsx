import CartProgressItem from "./cart-progress-item";
import Line from "./line.svg";

function CartProgress() {
  return (
    <div className="flex items-center justify-center mb-12">
      <CartProgressItem name="Cart" number="1" />
      <Line className="ml-4 mr-2" />
      <CartProgressItem name="Address" number="2" />
      <Line className="ml-4 mr-2" />
      <CartProgressItem name="Payments" number="3" />
    </div>
  );
}

export default CartProgress;

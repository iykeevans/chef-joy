import OrderProgressItem from "./order-progress-item";

function OrderProgress({ step }) {
  return (
    <div className="flex md:items-center justify-center mb-12">
      <OrderProgressItem
        isActive={step == 0}
        isComplete={step > 0}
        name="Cart"
        number="1"
      />

      <div
        className={`border-t-2 w-full border-dashed ${
          step == 1 && "border-red-500"
        } md:mt-0 mt-3 md:ml-2 md:mr-2 ml-2`}
      ></div>

      <OrderProgressItem
        isActive={step == 1}
        isComplete={step > 1}
        name="Address"
        number="2"
      />

      <div
        className={`border-t-2 w-full border-dashed ${
          step == 2 && "border-red-500"
        } md:mt-0 mt-3 md:ml-2 md:mr-2`}
      ></div>

      <OrderProgressItem
        isActive={step == 2}
        isComplete={step > 2}
        name="Payments"
        number="3"
      />
    </div>
  );
}

export default OrderProgress;

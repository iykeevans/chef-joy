import OrderSummary from "../../../components/order/order-summary";
import OrderProgress from "../../../components/order/order-progress";
import OrderContents from "../../../components/order/order-contents";
import OrderAddress from "../../../components/order/order-address";
import OrderPayment from "../../../components/order/order-payment";
import OrderSuccess from "../../../components/order/order-success";
import ChButton from "../../../components/base/ch-button";

function Order() {
  return (
    <div className="w-11/12 mx-auto pt-32">
      {/* Order Process */}
      <div className="hidden">
        <OrderProgress />

        <div className="flex justify-between">
          <div className="w-7/12">
            <OrderContents />

            <OrderAddress className="hidden" />

            <OrderPayment className="hidden" />
          </div>

          <div style={{ width: "28%" }}>
            <h3 className="text-xl font-semibold mb-2">Summary</h3>

            <OrderSummary />

            <ChButton className="w-full bg-black text-white flex justify-center py-3 mt-7">
              Proceed
            </ChButton>
          </div>
        </div>
      </div>

      {/* Order Success */}
      <div>
        <OrderSuccess />
      </div>
    </div>
  );
}

export default Order;

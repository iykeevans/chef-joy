import CartSummary from "../../components/cart/cart-summary";
import CartProgress from "../../components/cart/cart-progress";
import CartItems from "../../components/cart/cart-items";
import CartAddress from "../../components/cart/cart-address";
import CartPayment from "../../components/cart/cart-payment";
import ChButton from "../../components/base/ch-button";

function Cart() {
  return (
    <div className="w-11/12 mx-auto pt-32">
      <CartProgress />

      {/* cart */}
      <section className="flex justify-between">
        <div className="w-7/12">
          <CartItems className="hidden" />

          <CartAddress className="hidden" />

          <CartPayment />
        </div>

        <div style={{ width: "28%" }}>
          <h3 className="text-xl font-semibold mb-2">Summary</h3>

          <CartSummary />
          <ChButton className="w-full bg-black text-white flex justify-center py-3 mt-7">
            Proceed
          </ChButton>
        </div>
      </section>
    </div>
  );
}

export default Cart;

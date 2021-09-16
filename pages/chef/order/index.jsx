import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

import LayoutTwo from "../../../components/layouts/layout-two";
import OrderSummary from "../../../components/order/order-summary";
import OrderProgress from "../../../components/order/order-progress";
import OrderContents from "../../../components/order/order-contents";
import OrderAddress from "../../../components/order/order-address";
import OrderPayment from "../../../components/order/order-payment";
import OrderSuccess from "../../../components/order/order-success";
import ChButton from "../../../components/base/ch-button";

import {
  fetchUserAddresses,
  addUserAddress,
} from "../../../services/address-api/user";

import cartHandler from "../../../utils/cart-handler";
import useCart from "../../../custom-hooks/use-cart";
import useChef from "../../../custom-hooks/use-chef";

function Order() {
  const {
    data: addresses,
    error,
    mutate,
  } = useSWR("user_addresses", fetchUserAddresses);

  const { cart, mutateCart } = useCart();
  const { chef } = useChef();

  const [step, setStep] = useState(0);

  const addAddress = async (address) => {
    try {
      await addUserAddress(address);
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSteps = () => {
    setStep(step + 1);
  };

  if (step === 3) {
    return (
      <div>
        <OrderSuccess />
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto pt-32 pb-10">
      <div>
        <div className="md:w-7/12 w-10/12 mx-auto">
          <OrderProgress step={step} />
        </div>

        <div className="flex md:flex-row flex-col justify-between">
          <div className="md:w-7/12">
            {step === 0 && (
              <OrderContents
                cart={cart}
                chef={chef}
                handleCart={(actionType, dishId, cuisineId) =>
                  cartHandler(actionType, dishId, cuisineId, cart, mutateCart)
                }
              />
            )}

            {step === 1 && (
              <OrderAddress addresses={addresses} addAddress={addAddress} />
            )}

            {step === 2 && <OrderPayment />}
          </div>

          <OrderSummaryWrapper className="md:mt-0 mt-12">
            <h3 className="text-xl font-semibold mb-2">Summary</h3>

            <OrderSummary handleSteps={handleSteps} />

            <ChButton
              className={`w-full ${
                cart.length
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }  flex justify-center py-3 mt-7 font-medium`}
              disabled={!cart.length}
              hasIcon={cart.length ? true : false}
              onClick={handleSteps}
            >
              {cart.length ? "Proceed" : "Cart must have at least one item"}
            </ChButton>
          </OrderSummaryWrapper>
        </div>
      </div>
    </div>
  );
}

const OrderSummaryWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 28%;
  }
`;

Order.getLayout = LayoutTwo;

export default Order;

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

function Order() {
  const {
    data: addresses,
    error,
    mutate,
  } = useSWR("user_addresses", fetchUserAddresses);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchUserAddresses().then((res) => console.log(res));
  // }, []);

  const [step, setStep] = useState(0);

  const handleCart = (actionType, cartId) => {
    if (actionType === "INCREMENT") {
      dispatch({
        type: "ADD_TO_CART",
        payload: { id: cartId },
      });
    } else {
      dispatch({ type: "REMOVE_FROM_CART", payload: cartId });
    }
  };

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

  // console.log("------> userAddress", data);

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
              <OrderContents cart={cart} handleCart={handleCart} />
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
              className="w-full bg-black text-white flex justify-center py-3 mt-7"
              onClick={handleSteps}
            >
              Proceed
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

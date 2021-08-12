import { useState } from "react";

import LayoutTwo from "../../../components/layouts/layout-two";
import OrderSummary from "../../../components/order/order-summary";
import OrderProgress from "../../../components/order/order-progress";
import OrderContents from "../../../components/order/order-contents";
import OrderAddress from "../../../components/order/order-address";
import OrderPayment from "../../../components/order/order-payment";
import OrderSuccess from "../../../components/order/order-success";
import ChButton from "../../../components/base/ch-button";
import styled from "styled-components";

function Order() {
  const [step, setStep] = useState(0);

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
        <div className="md:w-8/12 w-10/12 mx-auto">
          <OrderProgress step={step} />
        </div>

        <div className="flex md:flex-row flex-col justify-between">
          <div className="md:w-7/12">
            {step === 0 && <OrderContents />}

            {step === 1 && <OrderAddress />}

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

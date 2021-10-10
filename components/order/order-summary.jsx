import styled from "styled-components";
import { getTotalAmount, getTotalMinutes } from "../../utils/cart-calculations";

function OrderSummary({ cart, cartCount }) {
  return (
    <Wrapper className="w-full p-4">
      <div className="flex items-center border-b pb-4">
        <div className="flex flex-col w-1/2">
          <span className="text-xs">Date</span>
          <span className="md:text-base text-sm font-medium text-red-600">
            16th Apr&apos;2
          </span>
        </div>

        <div className="flex flex-col w-1/2">
          <span className="text-xs">Time</span>
          <span className="md:text-base text-sm font-medium text-red-600">
            7:00PM - 8:55PM
          </span>
        </div>
      </div>

      <div className="flex justify-between mt-3 mb-1">
        <div className="font-medium">Total Time</div>
        <div className="font-medium">{getTotalMinutes(cart).formattedVal}</div>
      </div>

      <div className="flex justify-between mb-2">
        <div className="flex items-center text-sm">
          <input type="checkbox" name="" id="" className="mr-1" />
          Pick Up Grocery
        </div>

        <span className="text-sm">$4.00</span>
      </div>

      <div className="text-gray-500 mb-5" style={{ fontSize: 10 }}>
        Pickup Charge Does Not Include Cost Of Grocery
      </div>

      <div className="flex justify-between mb-5">
        <div className="flex flex-col">
          <span className="font-medium">Cooking Charges</span>
          <span className="text-sm text-gray-500">(Goes To Chef)</span>
        </div>

        <div>${getTotalMinutes(cart).rawVal * 35}</div>
      </div>

      <div className="flex justify-between mb-5">
        <div className="flex flex-col">
          <span className="font-medium">Platform Fee</span>
          <span className="text-sm text-gray-500">(Goes To Chef Joy)</span>
        </div>

        <div>${cart[0]?.price.platform_fee || 0}</div>
      </div>

      <div className="flex justify-between border-b pb-3">
        <div className="font-medium">Taxes</div>

        <div>${cart[0]?.price.tax_rate || 0}</div>
      </div>

      <div className="flex justify-between mt-3">
        <div className="font-semibold">Total</div>

        <div className="font-semibold">${getTotalAmount(cart, cartCount)}</div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export default OrderSummary;

import React from "react";
import LayoutTwo from "../../../components/layouts/layout-two";
import OrderChefInfo from "../../../components/order/order-chef-info";

import More from "../../../components/order/more.svg";
import Message from "../../../components/order/message.svg";
import OrderIcon from "../../../components/order/order.svg";
import Scheduling from "../../../components/order/scheduling.svg";
import Dollar from "../../../components/order/dollar.svg";

function OrderDetails() {
  return (
    <div className="md:w-7/12 w-11/12 mx-auto pt-32 pb-10">
      <div className="mb-8 text-sm">
        Home / <span className="text-gray-400">Booking</span>
      </div>

      <div className="flex items-center justify-between border rounded-lg px-4 py-5 w-full mb-5">
        <OrderChefInfo className="flex items-center" />

        <button className="flex items-center border border-black rounded-lg px-4 py-2 text-sm font-medium">
          <Message className="mr-2" />
          Message
        </button>
      </div>

      <div className="border rounded-lg px-4 py-5 w-full mb-5">
        <div className="flex items-center justify-between border-b-2 border-dashed pb-4 mb-5">
          <div className="flex items-center">
            <div>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <OrderIcon className="mr-1" />
                Order ID
              </div>

              <div className="font-medium">1448</div>
            </div>

            <div className="ml-24">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Scheduling className="mr-1" />
                Booked For
              </div>

              <div className="font-medium">
                16th Apr&apos;21 - 7pm to 8:55pm
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <button className="bg-gray-100 text-gray-500 text-sm font-medium py-2 px-4 rounded-lg mr-3">
              Waiting For Chef&apos;s Confirmation
            </button>
            <More />
          </div>
        </div>

        <div className="flex items-center">
          <div className="h-28 w-40 bg-gray-200 rounded-lg"></div>

          <div className="flex justify-between w-full">
            <div className="flex-col pl-5">
              <h3 className="text-lg font-semibold mb-2">Chicken Noodles</h3>
              <div className="text-gray-700">5 Servings</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg px-4 py-5 w-full">
        <div className="flex items-center justify-between border-b-2 border-dashed pb-4 mb-5">
          <div className="flex items-center">
            <div>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <OrderIcon className="mr-1" />
                Order ID
              </div>

              <div className="font-medium">1448</div>
            </div>

            <div className="ml-24">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Scheduling className="mr-1" />
                Booked For
              </div>

              <div className="font-medium">
                16th Apr&apos;21 - 7pm to 8:55pm
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <button className="flex items-center border border-black text-sm font-medium py-2 px-4 rounded-lg mr-3">
              <Dollar className="mr-2" />
              Add Payment
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-3 mb-2">
          <div className="font-medium">Total Time</div>
          <div className="font-medium">40 Mins</div>
        </div>

        <div className="flex justify-between mb-2">
          <div className="flex items-center text-sm">Pick Up Grocery</div>

          <span className="text-sm">$4.00</span>
        </div>

        <div className="text-gray-500 mb-6" style={{ fontSize: 10 }}>
          Pickup Charge Does Not Include Cost Of Grocery
        </div>

        <div className="flex justify-between mb-6">
          <div className="flex flex-col">
            <span className="font-medium">Cooking Charges</span>
            <span className="text-sm text-gray-500">(Goes To Chef)</span>
          </div>

          <div>$40.00</div>
        </div>

        <div className="flex justify-between mb-6">
          <div className="flex flex-col">
            <span className="font-medium">Platform Fee</span>
            <span className="text-sm text-gray-500">(Goes To Chef Joy)</span>
          </div>

          <div>$10.00</div>
        </div>

        <div className="flex justify-between border-b pb-3">
          <div className="font-medium">Taxes</div>

          <div>$6.00</div>
        </div>

        <div className="flex justify-between mt-3">
          <div className="font-semibold">Total</div>

          <div className="font-semibold">$56.00</div>
        </div>
      </div>
    </div>
  );
}

OrderDetails.getLayout = LayoutTwo;

export default OrderDetails;

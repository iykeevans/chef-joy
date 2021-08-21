import React from "react";
import Image from "next/image";

import LayoutTwo from "../../../components/layouts/layout-two";
import LocationPin from "../../../components/order/location-pin.svg";

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
        <div className="flex items-center">
          <div className="relative bg-gray-300 md:h-12 h-10 md:w-12 w-10 rounded-full">
            <Image
              src="/assets/images/chefs/louis--circle.png"
              alt="louis-circle"
              layout="fill"
            />
          </div>

          <div className="ml-3 flex-col">
            <span className="md:text-xl text-sm font-semibold">Louis Ford</span>
            <div className="md:text-sm text-xs text-gray-500 flex items-center">
              <LocationPin />
              <span className="ml-1">Bay Area</span>
            </div>
          </div>
        </div>

        <button className="flex items-center md:border border-black rounded-lg md:px-4 md:py-2 text-sm font-medium">
          <Message className="mr-2" />
          Message
        </button>
      </div>

      <div className="relative border rounded-lg px-4 md:py-5 py-4 w-full mb-5">
        <div className="flex md:flex-row flex-col md:items-center md:justify-between border-b-2 border-dashed pb-4 mb-5">
          <div className="flex md:items-center">
            <div className="w-1/2 md:w-auto">
              <div className="flex items-center md:text-sm text-xs text-gray-500 mb-3">
                <OrderIcon className="mr-1" />
                Order ID
              </div>

              <div className="md:text-base text-sm font-medium">1448</div>
            </div>

            <div className="md:ml-24 w-1/2 md:w-auto">
              <div className="flex items-center md:text-sm text-xs text-gray-500 md:mb-3 mb-2">
                <Scheduling className="mr-1" />
                Booked For
              </div>

              <div className="md:text-base text-sm font-medium">
                16th Apr&apos;21 - 7pm to 8:55pm
              </div>
            </div>
          </div>

          <div className="flex items-center md:mt-0 mt-5">
            <button className="bg-gray-100 text-gray-500 md:text-sm text-xs font-medium py-2 px-4 rounded-lg mr-3">
              Waiting For Chef&apos;s Confirmation
            </button>

            <More className="md:static absolute right-1 top-3" />
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:justify-between">
          <div className="flex items-center">
            <div className="relative h-28 w-52 bg-gray-200 rounded-lg">
              <Image
                src="/assets/images/dishes/cart-dish.jpg"
                alt="cart-dish"
                layout="fill"
              />
            </div>

            <div className="flex justify-between w-full">
              <div className="flex-col md:pl-5 pl-4">
                <h3 className="md:text-lg text-sm font-semibold md:mb-2 mb-1">
                  Chicken Noodles
                </h3>
                <div className="text-gray-700 md:text-base text-sm">
                  5 Servings
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:mt-0 mt-10">
            <span className="font-medium">Total</span>{" "}
            <span className="text-red-500 font-semibold ml-1">$140.00</span>
          </div>
        </div>
      </div>

      <div className="border rounded-lg px-4 py-5 w-full">
        <div className="flex md:flex-row flex-col items-center justify-between border-b-2 border-dashed pb-4 mb-5">
          <div className="flex md:items-center">
            <div className="w-1/2 md:w-auto">
              <div className="flex items-center md:text-sm text-xs text-gray-500 md:mb-3 mb-2">
                <OrderIcon className="mr-1" />
                Order ID
              </div>

              <div className="font-medium md:text-base text-sm">1448</div>
            </div>

            <div className="md:ml-24 w-1/2 md:w-auto">
              <div className="flex items-center md:text-sm text-xs text-gray-500 md:mb-3 mb-2">
                <Scheduling className="mr-1" />
                Booked For
              </div>

              <div className="font-medium md:text-base text-sm">
                16th Apr&apos;21 - 7pm to 8:55pm
              </div>
            </div>
          </div>

          <div className="flex items-center md:mt-0 mt-5">
            <button className="flex items-center border border-black text-sm font-medium py-2 px-4 rounded-lg">
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

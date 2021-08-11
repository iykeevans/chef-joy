import React from "react";
import OrderChefInfo from "./order-chef-info";

import CheckMark from "./check-mark.svg";
import More from "./more.svg";
import Message from "./message.svg";
import OrderIcon from "./order.svg";
import Scheduling from "./scheduling.svg";
import FakeCalender from "./fake-calender.svg";

function Order() {
  return (
    <div className="w-9/12 mx-auto flex flex-col items-center">
      <CheckMark />
      <h1 className="text-2xl font-semibold mt-3 mb-7">Chef Booked</h1>

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

        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="h-28 w-52 bg-gray-200 rounded-lg"></div>

            <div className="flex justify-between w-full">
              <div className="flex-col pl-5">
                <h3 className="text-lg font-semibold mb-2">Chicken Noodles</h3>
                <div className="text-gray-700">5 Servings</div>
              </div>
            </div>
          </div>

          <div>
            <span className="font-medium">Total</span>{" "}
            <span className="text-red-500 font-semibold ml-1">$140.00</span>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="font-medium text-red-600">View Order</button>
        </div>
      </div>

      <div className="border w-full rounded-lg px-4 py-5">
        <h2 className="text-xl font-semibold mb-7">Add Recurring Meal</h2>
        <div className="flex">
          <div className="w-1/2">
            <FakeCalender />
          </div>

          <div className="w-1/2">
            <h3 className="font-medium text-lg mb-3">
              Select multiple dates from calendar & select time for booking.
            </h3>

            <div className="mb-4">Available time for March 14, 2021</div>

            <div className="mb-6">
              <span className="mr-2">FROM</span>
              <input type="time" className="border rounded-lg px-3 py-1" />
            </div>

            <button className="font-medium text-white bg-black rounded-lg py-3 px-6">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;

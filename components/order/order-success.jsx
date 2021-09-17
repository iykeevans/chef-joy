import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import CheckMark from "./check-mark.svg";
import More from "./more.svg";
import Message from "./message.svg";
import OrderIcon from "./order.svg";
import Scheduling from "./scheduling.svg";
import FakeCalender from "./fake-calender.svg";
import LocationPin from "./location-pin.svg";

function Order() {
  useEffect(() => {
    return () => {
      localStorage.removeItem("currentStep");
      localStorage.removeItem("completedSteps");
    };
  }, []);
  return (
    <div className="md:w-7/12 w-11/12 mx-auto pt-32 pb-10 flex flex-col items-center">
      <CheckMark className="md:w-24 w-16" />

      <h1 className="md:text-2xl text-xl font-semibold mt-3 mb-7">
        Chef Booked
      </h1>

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

        <div className="flex justify-center md:mt-10 mt-5">
          <Link href="/chef/order/1">
            <a className="font-medium text-red-600">View Order</a>
          </Link>
        </div>
      </div>

      <div className="md:border w-full rounded-lg md:px-4 md:py-5 md:mt-0 mt-5">
        <h2 className="text-xl font-semibold md:mb-7 mb-4">
          Add Recurring Meal
        </h2>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 md:pr-8">
            <FakeCalender />
          </div>

          <div className="md:w-1/2 md:mt-0 mt-5">
            <h3 className="font-medium text-lg mb-3">
              Select multiple dates from calendar & select time for booking.
            </h3>

            <div className="mb-4">Available time for March 14, 2021</div>

            <div className="mb-6">
              <span className="mr-2">FROM</span>
              <input type="time" className="border rounded-lg px-3 py-1" />
            </div>

            <button className="font-medium text-white bg-black rounded-lg py-3 px-6 md:w-auto w-full">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;

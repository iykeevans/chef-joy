import React from "react";
import Image from "next/image";

import CartButton from "../../cart-button";

function OrderContent() {
  return (
    <div className="flex w-full">
      <div className="relative md:h-32 h-24 md:w-56 w-44 bg-gray-200 rounded-lg">
        <Image
          src="/assets/images/dishes/cart-dish.jpg"
          alt="cart-dish"
          layout="fill"
        />
      </div>

      <div className="w-full flex md:flex-row md:justify-between flex-col md:pl-5 pl-4">
        <div className="flex-col">
          <h3 className="md:text-lg font-semibold">Chicken Noodles</h3>
          <div className="text-gray-700 mb-2 md:text-base text-sm">
            Serves 2 - 45 mins
          </div>
          <div className="md:w-7/12 text-sm text-gray-500">
            Vegetables usually used include peas, green...
          </div>
        </div>

        <div className="md:mt-0 mt-5">
          <CartButton count={3} />
        </div>
      </div>
    </div>
  );
}

export default OrderContent;

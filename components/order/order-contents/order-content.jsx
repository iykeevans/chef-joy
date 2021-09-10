import React from "react";
import Image from "next/image";

import CartButton from "../../cart-button";

function OrderContent({ cart = [], handleCart }) {
  if (!cart.length) return <div>Nothing here</div>;
  return (
    <>
      {cart.map((item) => (
        <div className="flex w-full mb-5" key={item.id}>
          <div className="relative md:h-32 h-24 md:w-56 w-44 bg-gray-200 rounded-lg">
            <Image src={item.image} alt="cart-dish" layout="fill" />
          </div>

          <div className="w-full flex md:flex-row md:justify-between flex-col md:pl-5 pl-4">
            <div className="flex-col">
              <h3 className="md:text-lg font-semibold">{item.name}</h3>
              <div className="text-gray-700 mb-2 md:text-base text-sm">
                {item.duration}
              </div>
              <div className="md:w-7/12 text-sm text-gray-500">
                {item.description}
              </div>
            </div>

            <div className="md:mt-0 mt-5">
              <CartButton
                count={item.count}
                onClick={(actionType) => handleCart(actionType, item.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default OrderContent;

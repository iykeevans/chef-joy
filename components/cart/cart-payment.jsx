import { useState } from "react";
import CartList from "./cart-list";

function CartAddress(props) {
  const [cards, setCards] = useState([
    {
      name: "American Express",
      details: "Xxxx Xxxx Xxxx 1008",
    },
    {
      name: "HDFC",
      details: "Xxxx Xxxx Xxxx 1008",
    },
  ]);
  return (
    <div {...props}>
      <h2 className="text-xl font-semibold mb-3">Address</h2>

      {cards.map((card, index) => (
        <CartList address={card} key={index} />
      ))}

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Payment Method</h2>
        <div className="flex text-center border border-b-0 rounded-t-lg">
          <div className="w-1/4 py-4 border-b-2 border-red-500">Card</div>
          <div className="w-1/4 py-4">Paypal</div>
          <div className="w-1/4 py-4">Google Pay</div>
          <div className="w-1/4 py-4">Apple Pay</div>
        </div>
        <div className="border rounded-b-lg grid grid-cols-12 gap-x-4 gap-y-5 p-4 pt-8">
          <label className="col-span-7 flex flex-col">
            Credit Card Type
            <input type="text" className="border rounded-lg py-2 px-3 mt-2" />
          </label>

          <label className="col-span-3 flex flex-col">
            Expiry date
            <input type="text" className="border rounded-lg py-2 px-3 mt-2" />
          </label>

          <label className="col-span-2 flex flex-col">
            CVV
            <input type="text" className="border rounded-lg py-2 px-3 mt-2" />
          </label>

          <label className="col-span-12 flex flex-col">
            Card Number
            <input
              type="text"
              className="border rounded-lg py-2 px-3 mt-2"
              placeholder="Enter Card Number"
            />
          </label>

          <label className="col-span-6 flex flex-col">
            Name on Card
            <input
              type="text"
              className="border rounded-lg py-2 px-3 mt-2"
              placeholder="Enter the name on acrd"
            />
          </label>

          <div className="col-span-12">
            <button className="bg-black text-white px-5 py-3 rounded-lg">
              Add Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartAddress;

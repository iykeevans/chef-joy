import { useState } from "react";
import OrderCard from "./order-card";
import ChSelectField from "../base/ch-select-field";

import PaymentCard from "./payment-card.svg";
import PaymentPaypal from "./payment-paypal.svg";
import PaymentGpay from "./payment-gpay.svg";
import PaymentApple from "./payment-apple.svg";
import Mastercard from "./mastercard.svg";

function OrderPayment(props) {
  const cardOptions = [
    { name: "Mastercard", value: "mastercard" },
    { name: "Visa", value: "visa" },
    { name: "Discover", value: "discover" },
  ];

  const [cards, setCards] = useState([]);

  const [selectedPayment, setSelectedPayment] = useState("american-express");

  const [showNewPayment, setShowNewPayment] = useState(false);

  return (
    <div {...props}>
      <h2 className="text-xl font-semibold mb-3">Address</h2>

      {cards.length ? (
        <>
          {cards.map((card, index) => (
            <OrderCard
              data={card}
              key={index}
              selected={selectedPayment}
              setSelected={setSelectedPayment}
            />
          ))}
        </>
      ) : (
        <div>No cards</div>
      )}

      {!showNewPayment && (
        <div className="flex justify-center md:mt-10">
          <button
            className="bg-black text-white px-5 py-3 rounded-lg"
            onClick={() => setShowNewPayment(true)}
          >
            New Payment Method
          </button>
        </div>
      )}

      {showNewPayment && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">Payment Method</h2>

          <div className="hidden border border-b-0 rounded-t-lg">
            <div className="w-1/4 flex items-center justify-center py-4 border-b-2 border-red-500">
              <PaymentCard />
              <span className="ml-2">Card</span>
            </div>

            <div className="w-1/4 flex items-center justify-center py-4">
              <PaymentPaypal />
              <span className="ml-2">Paypal</span>
            </div>

            <div className="w-1/4 flex items-center justify-center py-4">
              <PaymentGpay />
              <span className="ml-2">Google Pay</span>
            </div>

            <div className="w-1/4 flex items-center justify-center py-4">
              <PaymentApple />
              <span className="ml-2">Apple Pay</span>
            </div>
          </div>

          <div className="md:border-0 border block rounded-lg">
            <div className="flex md:hidden items-center p-4">
              <PaymentCard />
              <span className="ml-2">Card</span>
            </div>

            <div className="md:border rounded-lg grid grid-cols-12 gap-x-4 gap-y-5 p-4 md:pt-8">
              <label
                className="md:col-span-7 col-span-12 flex flex-col"
                htmlFor="cardTypes"
              >
                Credit Card Type
                <div className="mt-2" style={{ height: 40 }}>
                  <ChSelectField
                    className="border rounded-lg"
                    options={cardOptions}
                    name="cardTypes"
                    id="cardTypes"
                  />
                </div>
              </label>

              <label className="md:col-span-3 col-span-6 flex flex-col">
                Expiry date
                <input
                  type="text"
                  className="border rounded-lg py-2 px-3 mt-2"
                />
              </label>

              <label className="md:col-span-2 col-span-6 flex flex-col">
                CVV
                <input
                  type="text"
                  className="border rounded-lg py-2 px-3 mt-2"
                />
              </label>

              <label className="col-span-12 flex flex-col">
                Card
                <div className="relative flex flex-col mt-2">
                  <Mastercard className="absolute top-1/2 left-3 transform -translate-y-1/2 h-3" />
                  <input
                    type="text"
                    className="border rounded-lg py-2 pl-10 pr-3"
                    placeholder="Enter Card Number"
                  />
                </div>
              </label>

              <label className="md:col-span-6 col-span-12 flex flex-col">
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

          {/* <div className="border md:hidden block rounded-lg mt-5">
            <div className="flex items-center p-4">
              <PaymentPaypal />
              <span className="ml-2">Paypal</span>
            </div>
          </div>

          <div className="border md:hidden block rounded-lg mt-5">
            <div className="flex items-center p-4">
              <PaymentGpay />
              <span className="ml-2">Google Pay</span>
            </div>
          </div>

          <div className="border md:hidden block rounded-lg mt-5">
            <div className="flex items-center p-4">
              <PaymentApple />
              <span className="ml-2">Apple Pay</span>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default OrderPayment;

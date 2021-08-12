import { useState } from "react";
import OrderCard from "./order-card";

function OrderAddress(props) {
  const [addresses, setAddresses] = useState([
    {
      name: "Home",
      details: "Vivamus Eget Aliquam Dui. Integer Eu Arcu Vel Arcu Suscipit",
    },
    {
      name: "Work",
      details: "Vivamus Eget Aliquam Dui. Integer Eu Arcu Vel Arcu Suscipit",
    },
  ]);
  return (
    <div {...props}>
      <h2 className="md:text-xl text-lg font-semibold mb-3">Address</h2>

      {addresses.map((address, index) => (
        <OrderCard address={address} key={index} />
      ))}

      <div className="mt-5">
        <h2 className="md:text-xl text-lg font-semibold mb-3">
          Add New Address
        </h2>
        <div className="md:border rounded-lg grid grid-cols-12 gap-x-4 gap-y-5 md:p-4">
          <input
            type="text"
            className="col-span-12 border rounded-lg py-2 px-3"
            placeholder="Address Nick Name"
          />
          <input
            type="text"
            className="col-span-12 border rounded-lg py-2 px-3"
            placeholder="Address"
          />
          <input
            type="text"
            className="md:col-span-6 col-span-12  border rounded-lg py-2 px-3"
            placeholder="Locality"
          />
          <input
            type="text"
            className="col-span-6 border rounded-lg py-2 px-3"
            placeholder="Landmark"
          />
          <input
            type="text"
            className="md:col-span-4 col-span-6 border rounded-lg py-2 px-3"
            placeholder="State"
          />
          <input
            type="text"
            className="md:col-span-4 col-span-6 border rounded-lg py-2 px-3"
            placeholder="City"
          />
          <input
            type="text"
            className="md:col-span-4 col-span-6 border rounded-lg py-2 px-3"
            placeholder="Pincode"
          />

          <input
            type="text"
            className="md:col-span-4 col-span-12 border rounded-lg py-2 px-3"
            placeholder="Mobile"
          />

          <div className="col-span-12">
            <button className="bg-black text-white px-5 py-3 rounded-lg w-full md:w-auto">
              Add Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderAddress;

import { useState } from "react";
import OrderCard from "./order-card";

function OrderAddress(props) {
  const [addresses, setAddresses] = useState([
    {
      name: "Home",
      details: "Vivamus Eget Aliquam Dui. Integer Eu Arcu Vel Arcu Suscipit",
      slug: "home",
    },
    {
      name: "Work",
      details: "Vivamus Eget Aliquam Dui. Integer Eu Arcu Vel Arcu Suscipit",
      slug: "work",
    },
  ]);

  const [newAddress, setNewAddress] = useState({
    addressNickName: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
    mobile: "",
  });

  const [showNewAddress, setShowNewAddress] = useState(false);

  const [selectedAddress, setSelectedAddress] = useState("home");

  return (
    <div {...props}>
      <h2 className="md:text-xl text-lg font-semibold mb-3">Address</h2>

      {addresses.map((address, index) => (
        <OrderCard
          data={address}
          key={index}
          selected={selectedAddress}
          setSelected={setSelectedAddress}
        />
      ))}

      {!showNewAddress && (
        <div className="flex justify-center md:mt-10">
          <button
            className="bg-black text-white px-5 py-3 rounded-lg"
            onClick={() => setShowNewAddress(true)}
          >
            Add New Address
          </button>
        </div>
      )}

      {showNewAddress && (
        <div className="mt-10">
          <h2 className="md:text-xl text-lg font-semibold mb-3">
            Add New Address
          </h2>
          <div className="md:border rounded-lg grid grid-cols-12 gap-x-4 gap-y-5 md:p-4">
            <input
              type="text"
              className="col-span-12 border rounded-lg py-2 px-3 appearance-none"
              placeholder="Address Nick Name"
            />
            <input
              type="text"
              className="col-span-12 border rounded-lg py-2 px-3 appearance-none"
              placeholder="Address"
            />
            {/* <input
              type="text"
              className="md:col-span-6 col-span-12  border rounded-lg py-2 px-3"
              placeholder="Locality"
            />
            <input
              type="text"
              className="col-span-6 border rounded-lg py-2 px-3"
              placeholder="Landmark"
            /> */}
            <input
              type="text"
              className="col-span-6 border rounded-lg py-2 px-3 appearance-none"
              placeholder="State"
            />

            <input
              type="text"
              className="col-span-6 border rounded-lg py-2 px-3 appearance-none"
              placeholder="City"
            />

            <input
              type="text"
              className="col-span-6 border rounded-lg py-2 px-3 appearance-none"
              placeholder="Zip Code"
            />

            <input
              type="text"
              className="col-span-6 border rounded-lg py-2 px-3 appearance-none"
              placeholder="Mobile"
            />

            <div className="col-span-12">
              <button className="bg-black text-white px-5 py-3 rounded-lg w-full md:w-auto">
                Add Address
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderAddress;

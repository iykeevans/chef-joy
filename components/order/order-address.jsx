import { useState, useEffect } from "react";
import OrderCard from "./order-card";

function OrderAddress({
  addresses,
  addAddress,
  selectedAddress,
  setSelectedAddress,
  ...rest
}) {
  const [newAddress, setNewAddress] = useState({
    address_name: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
    mobile: "",
  });

  const [showNewAddress, setShowNewAddress] = useState(false);

  useEffect(() => {
    if (addresses && formatAddresses(addresses).length) {
      const firstAddress = formatAddresses(addresses)[0];
      setSelectedAddress(firstAddress.slug);
    }
  }, [addresses]);

  const formatAddresses = (response) => {
    if (!response) return [];
    if (!Object.keys(response.data).length) return [];
    return response.data.map((item) => ({
      name: item.address_name,
      details: item.address,
      slug: item.address_name,
    }));
  };

  return (
    <div {...rest}>
      <h2 className="md:text-xl text-lg font-semibold mb-3">Address</h2>

      {formatAddresses(addresses).map((address, index) => (
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
          <form
            className="md:border rounded-lg grid grid-cols-12 gap-x-4 gap-y-5 md:p-4"
            onSubmit={async (e) => {
              e.preventDefault();
              await addAddress(newAddress);
              setShowNewAddress(false);
            }}
          >
            <input
              type="text"
              className="col-span-12 border rounded-lg py-2 px-3 appearance-none"
              placeholder="Address Nick Name"
              onChange={({ target }) =>
                setNewAddress({ ...newAddress, address_name: target.value })
              }
            />
            <input
              type="text"
              className="col-span-12 border rounded-lg py-2 px-3 appearance-none"
              placeholder="Address"
              onChange={({ target }) =>
                setNewAddress({ ...newAddress, address: target.value })
              }
            />

            <input
              type="text"
              className="col-span-6 border rounded-lg py-2 px-3 appearance-none"
              placeholder="State"
              onChange={({ target }) =>
                setNewAddress({ ...newAddress, state: target.value })
              }
            />

            <input
              type="text"
              className="col-span-6 border rounded-lg py-2 px-3 appearance-none"
              placeholder="City"
              onChange={({ target }) =>
                setNewAddress({ ...newAddress, city: target.value })
              }
            />

            <input
              type="text"
              className="col-span-6 border rounded-lg py-2 px-3 appearance-none"
              placeholder="Zip Code"
              onChange={({ target }) =>
                setNewAddress({ ...newAddress, pincode: target.value })
              }
            />

            <input
              type="text"
              className="col-span-6 border rounded-lg py-2 px-3 appearance-none"
              placeholder="Mobile"
              onChange={({ target }) =>
                setNewAddress({ ...newAddress, mobile: target.value })
              }
            />

            <div className="col-span-12">
              <button
                className="bg-black text-white px-5 py-3 rounded-lg w-full md:w-auto"
                type="submit"
              >
                Add Address
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default OrderAddress;

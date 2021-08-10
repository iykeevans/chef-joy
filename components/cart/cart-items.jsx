import React from "react";

function CartItems(props) {
  return (
    <div {...props}>
      <div className="flex items-center border-b pb-5">
        <div className="bg-gray-300 h-10 w-10 rounded-full"></div>

        <div className="ml-3 flex-col">
          <span className="text-xl font-semibold">Louis Ford</span>
          <div className="text-xs">Bay Area</div>
        </div>
      </div>

      <div className="flex mt-6">
        <div className="h-32 w-56 bg-gray-200 rounded-lg"></div>

        <div className="flex justify-between w-full">
          <div className="flex-col pl-5">
            <h3 className="text-lg font-semibold">Chicken Noodles</h3>
            <div className="text-gray-700 mb-2">Serves 2 - 45 mins</div>
            <div className="w-7/12 text-sm text-gray-500">
              Vegetables usually used include peas, green...
            </div>
          </div>

          <div>
            <div className="border px-2 py-1 rounded-lg"> - 2 +</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;

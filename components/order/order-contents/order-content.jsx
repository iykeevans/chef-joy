import React from "react";

function OrderContent() {
  return (
    <div className="flex">
      <div className="md:h-32 h-24 md:w-56 w-44 bg-gray-200 rounded-lg"></div>

      <div className="flex justify-between w-full">
        <div className="flex-col md:pl-5 pl-4">
          <h3 className="md:text-lg font-semibold">Chicken Noodles</h3>
          <div className="text-gray-700 mb-2 md:text-base text-sm">
            Serves 2 - 45 mins
          </div>
          <div className="md:w-7/12 text-sm text-gray-500">
            Vegetables usually used include peas, green...
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderContent;

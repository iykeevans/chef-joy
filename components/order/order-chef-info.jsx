import React from "react";

import LocationPin from "./location-pin.svg";

function OrderChefInfo(props) {
  return (
    <div {...props}>
      <div className="bg-gray-300 h-12 w-12 rounded-full"></div>

      <div className="ml-3 flex-col">
        <span className="md:text-xl text-base font-semibold">Louis Ford</span>
        <div className="text-sm text-gray-500 flex items-center">
          <LocationPin />
          <span className="ml-1">Bay Area</span>
        </div>
      </div>
    </div>
  );
}

export default OrderChefInfo;

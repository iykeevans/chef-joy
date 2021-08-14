import React from "react";
import Image from "next/image";

import LocationPin from "./location-pin.svg";

function OrderChefInfo(props) {
  return (
    <div {...props}>
      <div className="relative bg-gray-300 h-12 w-12 rounded-full">
        <Image
          src="/assets/images/chefs/louis--circle.png"
          alt="louis-circle"
          layout="fill"
        />
      </div>

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

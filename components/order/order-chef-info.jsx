import React from "react";
import Image from "next/image";

import LocationPin from "./location-pin.svg";
import { IMAGE_URL } from "../../constants/enviroment-vars";

function OrderChefInfo({ chef, ...rest }) {
  return (
    <div {...rest}>
      <div className="relative bg-gray-300 h-12 w-12 rounded-full">
        <Image
          src={`${IMAGE_URL}${chef.profilePic}`}
          alt="louis-circle"
          className="rounded-full"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="ml-3 flex-col">
        <span className="md:text-xl text-base font-semibold">
          {chef?.fullName}
        </span>
        <div className="text-sm text-gray-500 flex items-center">
          <LocationPin />
          <span className="ml-1">
            {chef?.city?.name} {chef?.city?.stateCode}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderChefInfo;

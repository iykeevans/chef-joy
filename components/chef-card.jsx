import React from "react";
import Image from "next/image";
import Stargazer from "./stargazer";

function ChefCard({ chef, ...rest }) {
  return (
    <div {...rest}>
      <div
        className="mb-5 relative rounded-lg"
        style={{ height: 200, background: "#eee" }}
      >
        <Image
          src={chef.image}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="flex justify-between">
        <span className="font-semibold text-lg">{chef.name}</span>
        <Stargazer stars={chef.stars} />
      </div>

      <div className="border-b pb-3 pt-1 text-gray-500">{chef.specialty}</div>

      <div className="mt-3 text-gray-700">{chef.time}</div>
    </div>
  );
}

export default ChefCard;

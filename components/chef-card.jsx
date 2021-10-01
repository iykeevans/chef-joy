import React from "react";
import Image from "next/image";
import Link from "next/link";

import Stargazer from "./stargazer";
import trimString from "../utils/trim-string";
import router from "next/router";

function ChefCard({ chef }) {
  const handleClick = (chefLink) => {
    if (chefLink) router.push(chefLink);
  };
  return (
    <button
      className={`w-11/12 md:w-full flex-none text-left ${
        chef.link ? "cursor-pointer" : "cursor-not-allowed"
      }`}
      onClick={() => handleClick(chef.link)}
    >
      <div
        className="mb-5 relative rounded-lg"
        style={{ height: 200, background: "#eee" }}
      >
        {chef?.profilePic && (
          <Image
            src={chef.profilePic}
            alt={chef.name}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="rounded-lg"
          />
        )}
      </div>

      <div>
        <div className="flex justify-between">
          <span className="font-semibold text-lg">{chef.name}</span>

          <Stargazer stars={chef.stars.toFixed(1)} />
        </div>

        <div className="border-b pb-3 pt-2 text-gray-500">
          {chef.cuisine && trimString(chef.cuisine, 55)}
        </div>

        <div className="mt-3 text-gray-700">{chef.time}</div>
      </div>
    </button>
  );
}

export default ChefCard;

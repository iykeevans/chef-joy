import React from "react";
import Image from "next/image";
import Link from "next/link";

import Stargazer from "./stargazer";

function ChefCard({ chef }) {
  return (
    <div className="w-11/12 flex-none">
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
            className="rounded-lg"
          />
        )}
      </div>

      <div>
        <div className="flex justify-between">
          {chef.link ? (
            <Link href={chef.link}>
              <a className="font-semibold text-lg">{chef.name}</a>
            </Link>
          ) : (
            <span className="font-semibold text-lg">{chef.name}</span>
          )}

          <Stargazer stars={chef.stars} />
        </div>

        <div className="border-b pb-3 pt-2 text-gray-500">{chef.cuisine}</div>

        <div className="mt-3 text-gray-700">{chef.time}</div>
      </div>
    </div>
  );
}

export default ChefCard;

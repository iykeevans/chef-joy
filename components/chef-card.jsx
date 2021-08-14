import React from "react";
import Image from "next/image";
import Link from "next/link";

import Stargazer from "./stargazer";

function ChefCard({ chef, isVariant }) {
  return (
    <div>
      <div
        className="mb-5 relative rounded-lg"
        style={{ height: 200, background: "#eee" }}
      >
        <Image
          src={chef.image}
          alt={chef.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
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

        <div className="border-b pb-3 pt-1 text-gray-500">{chef.specialty}</div>

        <div className="mt-3 text-gray-700">{chef.time}</div>
      </div>
    </div>
  );
}

export default ChefCard;

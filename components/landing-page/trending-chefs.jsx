import { useState } from "react";

import ChefCard from "../chef-card";
import ChButton from "../base/ch-button";
import GridToScroll from "../grid-to-scroll";

function TrendingChefs() {
  const [chefs, setChefs] = useState([
    {
      name: "James Andrew",
      stars: 4.5,
      specialty: "indian",
      time: "5pm to 8pm",
      image: "/assets/images/chefs/james.jpg",
    },
    {
      name: "Agatha Simone",
      stars: 4.5,
      specialty: "chinese, italian, thai",
      time: "5pm to 8pm",
      image: "/assets/images/chefs/agatha.jpg",
    },
    {
      name: "Rodrigo De Paul",
      stars: 4.5,
      specialty: "indian",
      time: "5pm to 8pm",
      image: "/assets/images/chefs/rodrigo.jpg",
    },
  ]);

  return (
    <section className="w-11/12 mx-auto md:pt-44 pt-32">
      <h2 className="md:text-4xl text-2xl font-semibold md:text-center md:mb-4 mb-2">
        Trending Chefs
      </h2>

      <div className="flex justify-center mb-10">
        <p className="md:text-center md:text-lg text-sm md:w-4/12 text-gray-500">
          Browse the chefs in demand and plan your next meal or party.
        </p>
      </div>

      <GridToScroll gridCols={3} gapX={8}>
        {chefs.map((chef, index) => (
          <ChefCard
            chef={chef}
            key={index}
            className="mb-14"
            style={{ flex: "0 0 auto" }}
          />
        ))}
      </GridToScroll>

      <div className="flex justify-center md:mt-16 mt-8">
        <ChButton className="bg-black text-white py-3 px-7 font-medium">
          45 More Chefs
        </ChButton>
      </div>
    </section>
  );
}

export default TrendingChefs;

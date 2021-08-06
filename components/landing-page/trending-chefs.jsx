import { useState } from "react";
import ChefCard from "../chef-card";

function TrendingChefs() {
  const [chefs, setChefs] = useState([
    {
      name: "Beverly James",
      stars: 4.5,
      specialty: "indian",
      time: "5pm to 8pm",
    },
    {
      name: "Kathy Hudson",
      stars: 4.5,
      specialty: "chinese, italian, thai",
      time: "5pm to 8pm",
    },
    { name: "Louis Ford", stars: 4.5, specialty: "indian", time: "5pm to 8pm" },
  ]);

  return (
    <section className="w-11/12 mx-auto pt-44">
      <h2 className="text-4xl font-semibold text-center mb-4">
        Trending Chefs
      </h2>

      <div className="flex justify-center mb-10">
        <p className="text-center text-lg md:w-4/12 text-gray-500">
          Browse the chefs in demand and plan your next meal or party.
        </p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8">
        {chefs.map((chef) => (
          <ChefCard chef={chef} />
        ))}
      </div>
    </section>
  );
}

export default TrendingChefs;

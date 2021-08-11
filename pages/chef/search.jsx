import { useState } from "react";

import ChefCard from "../../components/chef-card";

function Search() {
  const [chefs, setChefs] = useState([
    {
      name: "Beverly James",
      stars: 4.5,
      specialty: "indian",
      time: "5pm to 8pm",
      image: "/assets/images/chefs/beverly.jpg",
    },
    {
      name: "Kathy Hudson",
      stars: 4.5,
      specialty: "chinese, italian, thai",
      time: "5pm to 8pm",
      image: "/assets/images/chefs/kathy.jpg",
    },
    {
      name: "Louis Ford",
      stars: 4.5,
      specialty: "indian",
      time: "5pm to 8pm",
      image: "/assets/images/chefs/louis.jpg",
    },
  ]);

  return (
    <div className="w-11/12 mx-auto pt-32">
      <div className="flex items-center">
        <div className="mr-5 flex flex-col items-center w-56 border-b-2 py-2">
          <span className="font-medium">Party</span>
          <span className="text-xs text-gray-500">59 Chefs</span>
        </div>

        <div className="flex flex-col items-center w-56 py-2">
          <span className="font-medium">Meals</span>
          <span className="text-xs text-gray-500">24 Chefs</span>
        </div>
      </div>

      <div className="flex items-center justify-between py-8">
        <h2 className="text-2xl font-semibold">Chefs Near {"San Diego"}</h2>

        <div className="text-sm">
          <button className="border p-2 rounded mr-3">Filter</button>
          <button className="bg-black text-white p-2 rounded mr-3">
            Popular
          </button>
          <button className="border p-2 rounded">Ratings</button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-x-8">
        {chefs.map((chef, index) => (
          <ChefCard chef={chef} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Search;

import { useState, useEffect } from "react";
import ChButton from "../base/ch-button";
import ChefCard from "../chef-card";
import GridToScroll from "../grid-to-scroll";

function ExploreChefs() {
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

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <section className="w-11/12 mx-auto md:pt-44 pt-32">
      <h2 className="md:text-4xl text-2xl font-semibold md:text-center md:mb-4 mb-2">
        Explore Chefs Near You
      </h2>

      <div className="flex justify-center mb-10">
        <p className="md:text-center md:text-lg text-sm md:w-4/12 text-gray-500">
          Find chef&apos;s nearby and book them for your next party or meal.
        </p>
      </div>

      <GridToScroll gridCols={3} gapX={8}>
        {chefs.map((chef, index) => (
          <ChefCard chef={chef} key={index} className="mb-14" />
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

export default ExploreChefs;

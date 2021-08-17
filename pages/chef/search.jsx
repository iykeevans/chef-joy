import { useState } from "react";

import ChefCard from "../../components/chef-card";
import MobileAd from "../../components/landing-page/mobile-ad";

import Dinner from "../../components/dinner.svg";
import Champagne from "../../components/champagne-glass.svg";
import Close from "../../components/close.svg";

function Search() {
  const [chefs, setChefs] = useState([
    {
      name: "Beverly James",
      stars: 4.5,
      specialty: "indian",
      time: "5pm to 8pm",
      image: "/assets/images/chefs/beverly.jpg",
      link: "/chef/profile",
    },
    {
      name: "Kathy Hudson",
      stars: 4.5,
      specialty: "chinese, italian, thai",
      time: "5pm to 8pm",
      image: "/assets/images/chefs/kathy.jpg",
      link: "/chef/profile",
    },
    {
      name: "Louis Ford",
      stars: 4.5,
      specialty: "indian",
      time: "5pm to 8pm",
      image: "/assets/images/chefs/louis.jpg",
      link: "/chef/profile",
    },
  ]);

  const [currentTab, setCurrentTab] = useState("meals");

  return (
    <>
      <div
        className="flex items-center fixed w-full bg-white z-10 border-b"
        style={{ top: 80 }}
      >
        <div className="flex items-center md:w-11/12 w-full md:mx-auto">
          <div
            className={`md:mr-5 flex justify-center items-center md:w-48 w-1/2 ${
              currentTab === "party" ? "border-b-2 border-red-500" : ""
            } py-2 cursor-pointer`}
            onClick={() => setCurrentTab("party")}
          >
            <Champagne className="h-7" />
            <div className="flex flex-col ml-3">
              <span className="font-medium">Party</span>
              <span className="text-xs text-gray-500">59 Chefs</span>
            </div>
          </div>

          <div
            className={`flex justify-center items-center md:w-48 w-1/2 ${
              currentTab === "meals" ? "border-b-2 border-red-500" : ""
            } py-2 cursor-pointer`}
            onClick={() => setCurrentTab("meals")}
          >
            <Dinner className="h-7" />
            <div className="flex flex-col ml-3">
              <span className="font-medium">Meals</span>
              <span className="text-xs text-gray-500">24 Chefs</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto pt-32">
        <div className="flex md:flex-row flex-col flex-col-reverse md:items-center md:justify-between pt-8 md:pb-8 pb-5 ">
          <h2 className="md:text-2xl text-lg font-semibold">
            Chefs Near {"San Diego"}
          </h2>

          <div className="text-sm flex items-center md:mb-0 mb-5">
            <button className="border p-2 rounded-lg mr-3 flex items-center">
              <div className="bg-red-500 text-white rounded-full h-4 w-4 text-xs mr-1">
                1
              </div>
              Filter
            </button>
            <button className="bg-black text-white p-2 rounded-lg mr-3 flex items-center">
              Popular
              <Close className="ml-2" />
            </button>
            <button className="border p-2 rounded-lg">Ratings</button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-x-8 gap-y-8">
          {chefs.map((chef, index) => (
            <ChefCard chef={chef} isVariant={true} key={index} />
          ))}
        </div>
      </div>

      <MobileAd />
    </>
  );
}

export default Search;

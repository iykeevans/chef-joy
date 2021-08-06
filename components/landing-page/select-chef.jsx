import React, { useState } from "react";

function SelectChef() {
  const [dishes, setDishes] = useState([
    { name: "Chinese", chefs: 59 },
    { name: "French", chefs: 24 },
    { name: "Italian", chefs: 31 },
    { name: "Japanese", chefs: 10 },
    { name: "Spanish", chefs: 20 },
    { name: "Indian", chefs: 5 },
    { name: "Moroccan", chefs: 15 },
    { name: "Thai", chefs: 28 },
  ]);

  return (
    <section className="w-10/12 mx-auto pt-44">
      <div className="flex justify-center mb-20">
        <h2 className="text-4xl text-center font-semibold md:w-5/12">
          Select Chefs That Cook Your Favourites
        </h2>
      </div>

      <div
        className="grid md:grid-cols-4 grid-col-1 gap-y-12"
        style={{ overflowX: "auto" }}
      >
        {dishes.map((dish) => (
          <div className="flex flex-col items-center">
            <div
              className="rounded-full"
              style={{ width: 180, height: 180, background: "#eee" }}
            ></div>
            <div className="mt-5 font-semibold text-lg text-gray-800">
              {dish.name}
            </div>
            <div className="text-gray-500">{dish.chefs} Chefs</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <button
          className="bg-black text-white py-3 px-7 font-medium mt-6"
          style={{ borderRadius: 8 }}
        >
          45 More Cuisines
        </button>
      </div>
    </section>
  );
}

export default SelectChef;

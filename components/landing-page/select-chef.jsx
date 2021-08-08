import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

function SelectChef() {
  const [dishes, setDishes] = useState([
    {
      name: "Chinese",
      chefs: 59,
      image: "/assets/images/landing-page/select-chef/chinese.jpg",
    },
    {
      name: "French",
      chefs: 24,
      image: "/assets/images/landing-page/select-chef/french.jpg",
    },
    {
      name: "Italian",
      chefs: 31,
      image: "/assets/images/landing-page/select-chef/italian.jpg",
    },
    {
      name: "Japanese",
      chefs: 10,
      image: "/assets/images/landing-page/select-chef/japanese.jpg",
    },
    {
      name: "Spanish",
      chefs: 20,
      image: "/assets/images/landing-page/select-chef/spanish.jpg",
    },
    {
      name: "Indian",
      chefs: 5,
      image: "/assets/images/landing-page/select-chef/indian.jpg",
    },
    {
      name: "Moroccan",
      chefs: 15,
      image: "/assets/images/landing-page/select-chef/moroccan.jpg",
    },
    {
      name: "Thai",
      chefs: 28,
      image: "/assets/images/landing-page/select-chef/thai.jpg",
    },
  ]);

  return (
    <section className="w-10/12 mx-auto md:pt-44 pt-32">
      <div className="flex justify-center md:mb-20 mb-12">
        <h2 className="md:text-4xl text-2xl text-center font-semibold md:w-5/12">
          Select Chefs That Cook Your Favourites
        </h2>
      </div>

      <div className="grid md:grid-cols-4 grid-col-1 gap-y-12">
        {dishes.map((dish, index) => (
          <div className="flex flex-col items-center" key={index}>
            <ImageWrapper className="rounded-full relative bg-gray-200">
              <Image
                src={dish.image}
                srcSet={`${dish.image}--mobile 1x`}
                alt={dish.name}
                layout="fill"
              />
            </ImageWrapper>
            <div className="mt-5 font-semibold text-lg text-gray-800">
              {dish.name}
            </div>
            <div className="text-gray-500">{dish.chefs} Chefs</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <button
          className="bg-black text-white py-3 px-7 font-medium mt-6 md:text-base text-sm"
          style={{ borderRadius: 8 }}
        >
          45 More Cuisines
        </button>
      </div>
    </section>
  );
}

const ImageWrapper = styled.div`
  height: 120px;
  width: 120px;

  @media screen and (min-width: 768px) {
    height: 180px;
    width: 180px;
  }
`;

export default SelectChef;

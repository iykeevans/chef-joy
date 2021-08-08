import { useRouter } from "next/router";
import styled from "styled-components";

import ChefHero from "./chef-hero";

function Hero() {
  const router = useRouter();

  return (
    <section className="w-11/12 mx-auto pt-32 pb-44">
      <div className="flex flex-col md:flex-row md:flex-row-reverse items-center w-full md:mb-0 mb-10">
        <div className="md:w-6/12 flex md:justify-end justify-center">
          <StyledChefHero width="500" />
        </div>

        <div className="md:w-6/12 text-center md:text-left md:mt-0 mt-6">
          <h1 className="font-bold md:text-5xl text-2xl md:w-10/12">
            Book Your Favorite Chef With Lovely Menu
          </h1>

          <p className="md:text-lg text-sm md:w-8/12 md:mt-6 mt-3 text-gray-500">
            Book the best chefs nearby for your next party or daily meals.
          </p>
        </div>
      </div>

      <div
        className="flex flex-wrap"
        style={{
          boxShadow: "0px 7px 64px rgba(0, 0, 0, 0.10)",
          borderRadius: 10,
          height: 70,
        }}
      >
        <div className="flex flex-col justify-center border-r h-full px-5 md:w-3/12 w-6/12">
          {/* <label htmlFor="">City</label> */}
          <input type="text" placeholder="City" />
        </div>

        <div className="flex flex-col justify-center md:border-r px-5 md:w-3/12 w-6/12">
          {/* <label htmlFor="">Date & Time</label> */}
          <input type="datetime" placeholder="Date / Time" />
        </div>

        <div className="flex flex-col justify-center md:border-r px-5 md:w-2/12 w-full">
          {/* <label htmlFor="">Type</label> */}
          <select name="" id="">
            <option value="">Party</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row items-center px-5 w-4/12 relative">
          <input
            type="search"
            placeholder="Search For Cuisines, Chef"
            className="text-sm"
          />
          <button
            className="md:absolute static flex items-center bg-black text-white py-4 px-8 font-medium"
            style={{ right: 8, borderRadius: 8 }}
            onClick={() => router.push("/chef/search")}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 21.115 21.115"
              className="mr-2"
            >
              <g
                id="Group_11471"
                data-name="Group 11471"
                transform="translate(1 -4.32)"
              >
                <circle
                  id="Ellipse_40"
                  data-name="Ellipse 40"
                  cx="7.48"
                  cy="7.48"
                  r="7.48"
                  transform="translate(0 5.32)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  id="Line_21"
                  data-name="Line 21"
                  x1="5.61"
                  y1="5.61"
                  transform="translate(13.091 18.41)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

const StyledChefHero = styled(ChefHero)`
  width: 80%;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export default Hero;

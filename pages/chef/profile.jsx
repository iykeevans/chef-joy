import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SuccessfulBookings from "../../components/landing-page/successful-bookings";
import MobileAd from "../../components/landing-page/mobile-ad";

function Profile() {
  const [dishes, setDishes] = useState([
    { name: "Chinese", value: 9 },
    { name: "French", value: 5 },
    { name: "Italian", value: 3 },
    { name: "Japanese", value: 6 },
  ]);
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
    <div className="pt-32">
      {/* sticky cart */}

      <div
        className="fixed w-full border bg-white z-10"
        style={{ bottom: 0, left: 0, height: 80 }}
      >
        <div className="w-11/12 h-full mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span>Your Order</span>
            <span>(10 Servings)</span>
          </div>

          <div>
            <span className="mr-6">Subtotal $120</span>
            <Link href="/chef/order">
              <a className="bg-black py-4 px-8 rounded-lg text-white">
                Proceed
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto">
        {/* breadcrumbs */}
        <div className="mb-10 text-sm">
          Home / San Diego / Party / Louis Ford
        </div>

        <div className="flex mb-14">
          <section className="w-1/2">
            <div className="flex items-center mb-6">
              <div className="bg-gray-200 h-16 w-16 rounded-full"></div>
              <div className="ml-5">
                <h4 className="text-lg font-semibold mb-1">Louis Ford</h4>
                <p>Bay Area</p>
              </div>
            </div>

            <p className="mb-8">
              Feugiat in ante metus dictum at tempor. Dui faucibus in ornare
              quam viverra. Elementum facilisis leo vel fringilla est
              ullamcorper. Ultricies tristique nulla aliquet enim tortor at
              auctor.
            </p>

            <div className="flex items-center">
              <button className="border border-black font-medium py-3 px-4 rounded-lg mr-4">
                Past Bookings
              </button>
              <button className="text-red-600 font-medium">
                + Add A Review
              </button>
            </div>
          </section>

          <section className="w-1/2">
            <div className="h-full w-10/12 ml-auto grid grid-cols-4 grid-rows-2 gap-3">
              <div className="row-span-2 col-span-2 bg-gray-200 rounded-lg"></div>
              <div className="row-span-1 col-span-1 bg-gray-200 rounded-lg"></div>
              <div className="row-span-1 col-span-1 bg-gray-200 rounded-lg"></div>
              <div className="row-span-1 col-span-1 bg-gray-200 rounded-lg"></div>
              <div className="row-span-1 col-span-1 bg-gray-200 rounded-lg"></div>
            </div>
          </section>
        </div>

        <h2 className="font-semibold text-3xl mb-6">Dishes</h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-x-8 mb-14">
          {dishes.map((dish, index) => (
            <div
              className="flex items-center border p-5 rounded-lg"
              key={index}
            >
              <div className="bg-gray-200 h-16 w-16 rounded-full"></div>
              <div className="ml-5">
                <h4 className="text-lg font-semibold mb-1">{dish.name}</h4>
                <p>{dish.value} Dishes</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-semibold text-3xl mb-6">Chinese Dishes</h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-x-8">
          {chefs.map((chef, index) => (
            <div key={index}>
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
                  <span className="font-semibold text-lg">{chef.name}</span>
                  {/* <Stargazer stars={chef.stars} /> */}
                </div>

                <div className="border-b pb-3 pt-1 text-gray-500">
                  {chef.specialty}
                </div>

                <div className="mt-3 text-gray-700">{chef.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SuccessfulBookings />
      <MobileAd />
    </div>
  );
}

export default Profile;

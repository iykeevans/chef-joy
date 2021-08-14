import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import SuccessfulBookings from "../../components/landing-page/successful-bookings";
import MobileAd from "../../components/landing-page/mobile-ad";
import GridToScroll from "../../components/grid-to-scroll";
import CartButton from "../../components/cart-button";

const DishGallery = () => (
  <div className="h-full w-10/12 ml-auto grid grid-cols-4 grid-rows-2 gap-3">
    <div className="relative row-span-2 col-span-2 bg-gray-200 rounded-lg">
      <Image
        src="/assets/images/dishes/gallery-1.jpg"
        alt="gallery-1"
        layout="fill"
      />
    </div>
    <div className="relative row-span-1 col-span-1 bg-gray-200 rounded-lg">
      <Image
        src="/assets/images/dishes/gallery-2.jpg"
        alt="gallery-2"
        layout="fill"
      />
    </div>
    <div className="relative row-span-1 col-span-1 bg-gray-200 rounded-lg">
      <Image
        src="/assets/images/dishes/gallery-3.jpg"
        alt="gallery-3"
        layout="fill"
      />
    </div>
    <div className="relative row-span-1 col-span-1 bg-gray-200 rounded-lg">
      <Image
        src="/assets/images/dishes/gallery-4.jpg"
        alt="gallery-4"
        layout="fill"
      />
    </div>
    <div className="flex items-center justify-center row-span-1 col-span-1 bg-gray-400 rounded-lg">
      <button>View More</button>
    </div>
  </div>
);

const Dish = ({ dish, index }) => (
  <div
    className={`${
      index !== 0 ? "bg-gray-100" : "bg-white"
    } flex items-center md:p-5 p-3 md:mb-0 mb-5`}
    style={{
      boxShadow: index == 0 && "0px 7px 64px rgba(0, 0, 0, 0.10)",
      borderRadius: 12,
    }}
  >
    <div className="bg-gray-500 h-16 w-16 rounded-full relative">
      <Image src={dish.image} alt={dish.name} layout="fill" />
    </div>
    <div className="ml-5">
      <h4 className="text-lg font-semibold mb-1">{dish.name}</h4>
      <p>{dish.value} Dishes</p>
    </div>
  </div>
);

const DishDetail = ({ dishDetail }) => {
  return (
    <div>
      <div
        className="mb-4 relative rounded-lg"
        style={{ height: 180, background: "#eee" }}
      >
        <Image
          src={dishDetail.image}
          alt={dishDetail.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div>
        <div className="text-lg font-semibold mb-1">{dishDetail.name}</div>

        <div className="text-sm mb-2">{dishDetail.duration}</div>

        <div className="border-b pb-5 pt-1 text-gray-500">
          {dishDetail.description}
        </div>

        <div className="mt-6 text-gray-700">
          <CartButton count={dishDetail.count} />
        </div>
      </div>
    </div>
  );
};

const StickyCart = () => (
  <div
    className="fixed w-full border bg-white z-10"
    style={{ bottom: 0, left: 0, height: 80 }}
  >
    <div className="w-11/12 h-full mx-auto flex items-center justify-between">
      <div className="flex flex-col">
        <span>Your Order</span>
        <span className="hidden md:block">(10 Servings)</span>
        <span className="md:hidden font-semibold">$120</span>
      </div>

      <div className="flex items-center">
        <span className="mr-6 hidden md:block">Subtotal $120</span>
        <Link href="/chef/order">
          <a className="bg-black py-4 px-8 rounded-lg text-white">Proceed</a>
        </Link>
      </div>
    </div>
  </div>
);

function Profile() {
  const [dishes, setDishes] = useState([
    { name: "Chinese", value: 9, image: "/assets/images/dishes/chinese.png" },
    { name: "French", value: 5, image: "/assets/images/dishes/french.png" },
    { name: "Italian", value: 3, image: "/assets/images/dishes/italian.png" },
    { name: "Japanese", value: 6, image: "/assets/images/dishes/japanese.png" },
  ]);

  const [dishDetails, setDishDetails] = useState([
    {
      name: "Jiaozi dumplings",
      duration: "Serves 2 - 45 mins",
      description: "Vegetables usually used include peas, green",
      image: "/assets/images/chefs/james.jpg",
      count: 0,
    },
    {
      name: "Vegetable chow mein",
      duration: "Serves 2 - 45 mins",
      description: "Vegetables usually used include peas, green",
      image: "/assets/images/chefs/james.jpg",
      count: 1,
    },
    {
      name: "Szechuan chicken",
      duration: "Serves 2 - 45 mins",
      description: "Vegetables usually used include peas, green",
      image: "/assets/images/chefs/james.jpg",
      count: 3,
    },
    {
      name: "Chicken Noodles",
      duration: "Serves 2 - 45 mins",
      description: "Vegetables usually used include peas, green",
      image: "/assets/images/chefs/james.jpg",
      count: 2,
    },
    {
      name: "Jiaozi dumplings",
      duration: "Serves 2 - 45 mins",
      description: "Vegetables usually used include peas, green",
      image: "/assets/images/chefs/james.jpg",
      count: 0,
    },
    {
      name: "Vegetable chow mein",
      duration: "Serves 2 - 45 mins",
      description: "Vegetables usually used include peas, green",
      image: "/assets/images/chefs/james.jpg",
      count: 1,
    },
    {
      name: "Szechuan chicken",
      duration: "Serves 2 - 45 mins",
      description: "Vegetables usually used include peas, green",
      image: "/assets/images/chefs/james.jpg",
      count: 3,
    },
    {
      name: "Chicken Noodles",
      duration: "Serves 2 - 45 mins",
      description: "Vegetables usually used include peas, green",
      image: "/assets/images/chefs/james.jpg",
      count: 2,
    },
  ]);

  return (
    <div className="pt-32">
      {/* sticky cart */}
      <StickyCart />

      <div className="w-11/12 mx-auto">
        {/* breadcrumbs */}
        <div className="mb-10 text-sm">
          Home / San Diego / Party / Louis Ford
        </div>

        <div className="flex mb-14">
          <section className="md:w-1/2">
            <div className="flex items-center mb-6">
              <div className="relative bg-gray-200 h-16 w-16 rounded-full">
                <Image
                  src="/assets/images/chefs/louis--circle.png"
                  layout="fill"
                />
              </div>

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

          <section className="w-1/2 hidden md:block">
            <DishGallery />
          </section>
        </div>

        <h2 className="font-semibold md:text-3xl text-xl md:mb-6 mb-5">
          Dishes
        </h2>

        <div className="mb-14">
          <GridToScroll gridCols={4} gapX={8}>
            {dishes.map((dish, index) => (
              <Dish dish={dish} index={index} key={index} />
            ))}
          </GridToScroll>
        </div>

        <h2 className="font-semibold text-3xl mb-6">Chinese Dishes</h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-x-8 gap-y-16">
          {dishDetails.map((dishDetail, index) => (
            <DishDetail dishDetail={dishDetail} key={index} />
          ))}
        </div>
      </div>

      <SuccessfulBookings />

      <MobileAd />
    </div>
  );
}

export default Profile;

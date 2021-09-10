import { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";

import SuccessfulBookings from "../../components/landing-page/successful-bookings";
import StickyCart from "../../components/profile/chef/sticky-cart";
import Dish from "../../components/profile/chef/dish";
import DishGallery from "../../components/profile/chef/dish-gallery";
import DishDetails from "../../components/profile/chef/dish-details";

import { fetchChefProfile } from "../../services/chef-api";
import { IMAGE_URL } from "../../constants/enviroment-vars";
import { fetchChefDishesByCuisineId } from "../../services/dish-api/chef";
import { fetchUserSuccessfulBookings } from "../../services/booking-api/user";

const formatProfileData = (data) => {
  return {
    profilePic: data?.data[0].profile_pic,
    fullName: `${data?.data[0].first_name} ${data?.data[0].last_name}`,
    description: data?.data[0].description,
    chefCuisines: data?.data[0].chef_cuisines,
    city: {
      stateCode: data?.data[0].home_city[0].state_code,
      name: data?.data[0].home_city[0].name,
    },
    galleryImages: data?.data[0].images,
  };
};

function Profile() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { data, error } = useSWR("chef_profile", fetchChefProfile);
  const { data: successfulBooking } = useSWR(
    "successful_bookings",
    fetchUserSuccessfulBookings
  );

  console.log("------->", successfulBooking);

  const [dishes, setDishes] = useState([
    {
      name: "Chinese",
      _id: 1,
      value: 9,
      image: "/assets/images/dishes/chinese.png",
    },
    {
      name: "French",
      _id: 2,
      value: 5,
      image: "/assets/images/dishes/french.png",
    },
    {
      name: "Italian",
      _id: 3,
      value: 3,
      image: "/assets/images/dishes/italian.png",
    },
    {
      name: "Japanese",
      _id: 4,
      value: 6,
      image: "/assets/images/dishes/japanese.png",
    },
  ]);

  // const [cart, setCart] = useState([]);

  const [selectedDish, setSelectedDish] = useState({
    name: "Chinese",
    _id: 1,
  });

  const [dishDetails, setDishDetails] = useState([
    {
      id: 1,
      name: "Jiaozi dumplings",
      duration: "Serves 2 - 45 mins",
      description: "Vegetables usually used include peas, green",
      image: "/assets/images/chefs/james.jpg",
      count: 0,
    },
    {
      id: 2,
      name: "Vegetable chow mein",
      duration: "Serves 2 - 45 mins",
      description: "Vegetables usually used include peas, green",
      image: "/assets/images/chefs/james.jpg",
      count: 0,
    },
    {
      id: 3,
      name: "Szechuan chicken",
      duration: "Serves 2 - 45 mins",
      description: "Vegetables usually used include peas, green",
      image: "/assets/images/chefs/james.jpg",
      count: 0,
    },
    {
      id: 4,
      name: "Chicken Noodles",
      duration: "Serves 2 - 45 mins",
      description: "Vegetables usually used include peas, green",
      image: "/assets/images/chefs/james.jpg",
      count: 0,
    },
    {
      id: 5,
      name: "Jiaozi dumplings",
      duration: "Serves 2 - 45 mins",
      description: "Vegetables usually used include peas, green",
      image: "/assets/images/chefs/james.jpg",
      count: 0,
    },
    {
      id: 6,
      name: "Vegetable chow mein",
      duration: "Serves 2 - 45 mins",
      description: "Vegetables usually used include peas, green",
      image: "/assets/images/chefs/james.jpg",
      count: 0,
    },
    {
      id: 7,
      name: "Szechuan chicken",
      duration: "Serves 2 - 45 mins",
      description: "Vegetables usually used include peas, green",
      image: "/assets/images/chefs/james.jpg",
      count: 0,
    },
    {
      id: 8,
      name: "Chicken Noodles",
      duration: "Serves 2 - 45 mins",
      description: "Vegetables usually used include peas, green",
      image: "/assets/images/chefs/james.jpg",
      count: 0,
    },
  ]);

  const handleCart = (actionType, cartId) => {
    const dishDetailIindex = dishDetails.findIndex(
      (dishDetail) => dishDetail.id === cartId
    );

    if (actionType === "INCREMENT") {
      const clonedDishDetails = [...dishDetails];

      clonedDishDetails[dishDetailIindex].count += 1;
      setDishDetails(clonedDishDetails);

      dispatch({
        type: "ADD_TO_CART",
        payload: clonedDishDetails[dishDetailIindex],
      });
    } else {
      const clonedDishDetails = [...dishDetails];

      clonedDishDetails[dishDetailIindex].count -= 1;
      setDishDetails(clonedDishDetails);

      dispatch({ type: "REMOVE_FROM_CART", payload: cartId });
    }
  };

  const getCartTotalCount = (cart) => {
    let total = 0;

    cart.forEach((item) => {
      total += item.count;
    });

    return total;
  };

  const handleSelectedDish = async (dish) => {
    setSelectedDish(dish);
    try {
      const data = await fetchChefDishesByCuisineId(dish._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pt-32">
      {/* sticky cart */}
      {cart.length && <StickyCart total={getCartTotalCount(cart)} />}

      <div className="w-11/12 mx-auto">
        {/* breadcrumbs */}
        <div className="mb-10 text-sm">
          Home / San Diego / Party / Louis Ford
        </div>

        <div className="flex mb-14">
          <section className="md:w-1/2">
            <div className="flex items-center mb-6">
              <div className="relative bg-gray-200 h-16 w-16 rounded-full">
                {data && (
                  <Image
                    src={`${IMAGE_URL}${formatProfileData(data).profilePic}`}
                    alt="chef"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                )}
              </div>

              <div className="ml-5">
                <h4 className="text-lg capitalize font-semibold mb-1">
                  {!data ? <Skeleton /> : formatProfileData(data).fullName}
                </h4>

                <p>
                  {!data ? (
                    <Skeleton />
                  ) : (
                    <span>
                      {formatProfileData(data).city.name}{" "}
                      {formatProfileData(data).city.stateCode}
                    </span>
                  )}
                </p>
              </div>
            </div>

            <p className="mb-8">{formatProfileData(data).description}</p>

            <div className="flex items-center">
              <button className="border border-black font-medium py-3 px-4 rounded-lg mr-4">
                Past Bookings
              </button>
              <button className="text-red-600 font-medium">
                + Add A Review
              </button>
            </div>
          </section>

          <section className="w-1/2 hidden md:block" style={{ height: 240 }}>
            <DishGallery images={formatProfileData(data).galleryImages} />
          </section>
        </div>

        <h2 className="font-semibold md:text-3xl text-xl md:mb-6 mb-5">
          Dishes
        </h2>

        <div className="mb-14">
          <div className="flex" style={{ overflowX: "auto", columnGap: 30 }}>
            {dishes.map((dish, index) => (
              <Dish
                dish={dish}
                selected={selectedDish}
                setSelected={(dish) => handleSelectedDish(dish)}
                key={index}
              />
            ))}
          </div>
        </div>

        <h2 className="font-semibold text-3xl mb-6">Chinese Dishes</h2>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-x-8 gap-y-16">
          {dishDetails.map((dishDetail, index) => (
            <DishDetails
              dishDetail={dishDetail}
              handleCart={handleCart}
              key={index}
            />
          ))}
        </div>
      </div>

      <SuccessfulBookings />
    </div>
  );
}

export default Profile;

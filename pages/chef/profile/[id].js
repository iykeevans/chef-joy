import { useEffect, useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import SuccessfulBookings from "../../../components/landing-page/successful-bookings";
import StickyCart from "../../../components/profile/chef/sticky-cart";
import Cuisine from "../../../components/profile/chef/cuisine";
import DishGallery from "../../../components/profile/chef/dish-gallery";
import DishDetails from "../../../components/profile/chef/dish-details";

import { fetchUserChefProfile } from "../../../services/chef-api";
import { IMAGE_URL } from "../../../constants/enviroment-vars";
import { fetchUserChefDishesByCuisineId } from "../../../services/dish-api/user";

function Profile(props) {
  const router = useRouter();
  // console.log("======/>", router);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { data, error } = useSWR("chef_profile", () =>
    fetchUserChefProfile(router.query.id)
  );

  const [selectedDish, setSelectedDish] = useState({});

  const [dishDetails, setDishDetails] = useState([]);

  const [loadingDishes, setLoadingDishes] = useState(true);

  useEffect(() => {
    setSelectedDish({ index: 0 });
    if (data) {
      (async () => {
        const response = await fetchUserChefDishesByCuisineId(
          data.chefCuisines[0].id
        );
        setDishDetails(response);
        setLoadingDishes(false);
      })();
    }
  }, [data]);

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
      setLoadingDishes(true);
      const data = await fetchUserChefDishesByCuisineId(dish.id);
      setDishDetails(data);
      setLoadingDishes(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pt-32">
      {/* sticky cart */}
      {cart.length ? <StickyCart total={getCartTotalCount(cart)} /> : null}

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
                    src={`${IMAGE_URL}${data.profilePic}`}
                    alt="chef"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                )}
              </div>

              <div className="ml-5">
                <h4 className="text-lg capitalize font-semibold mb-1">
                  {!data ? <Skeleton /> : data.fullName}
                </h4>

                <p>
                  {!data ? (
                    <Skeleton />
                  ) : (
                    <span>
                      {data.city.name} {data.city.stateCode}
                    </span>
                  )}
                </p>
              </div>
            </div>

            <p className="mb-8">{data?.description}</p>

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
            <DishGallery images={data?.galleryImages} />
          </section>
        </div>

        <h2 className="font-semibold md:text-3xl text-xl md:mb-6 mb-5">
          Cuisines
        </h2>

        <div className="mb-14">
          <div className="flex" style={{ overflowX: "auto", columnGap: 30 }}>
            {data?.chefCuisines.map((dish, index) => (
              <Cuisine
                dish={dish}
                isActive={selectedDish.index === index}
                setSelected={(dish) => handleSelectedDish(dish)}
                key={index}
              />
            ))}
          </div>
        </div>

        <h2 className="font-semibold text-3xl mb-6">
          {selectedDish.name} Dishes
        </h2>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-x-8 gap-y-16">
          {loadingDishes ? (
            <div>Loading...</div>
          ) : (
            <>
              {dishDetails.map((dishDetail, index) => (
                <DishDetails
                  dishDetail={dishDetail}
                  handleCart={handleCart}
                  key={index}
                />
              ))}
            </>
          )}
        </div>
      </div>

      <SuccessfulBookings />
    </div>
  );
}

export default Profile;

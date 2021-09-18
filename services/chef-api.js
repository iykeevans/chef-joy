import apiClient from ".";
import { IMAGE_URL } from "../constants/enviroment-vars";

const transformTrendingChefs = ({ data }) => {
  return data.map((item) => ({
    name: item.first_name,
    stars: 4.5,
    cuisine: item.chef_cuisines.map((data) => data.name).join(", "),
    time: "5pm to 8pm",
    profilePic: `${IMAGE_URL}${item.profile_pic}`,
  }));
};

/**
 * fetch trending chef.
 *
 * @function
 * @return {Promise<Object>} chef object
 */
export const fetchTrendingChefs = async () => {
  try {
    const data = await apiClient.get("user/pub/get-trending-chef").json();
    return transformTrendingChefs(data);
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * fetch chef.profile
 *
 * @function
 * @return {Promise<Object>} chef object
 */
export const fetchChefProfile = async () => {
  try {
    const data = await apiClient.get("api/chef/get-chef-profile").json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

const transformUserChefProfile = ({ data }) => {
  const item = data[0];

  return {
    id: item._id,
    profilePic: item.profile_pic,
    fullName: `${item.first_name} ${item.last_name}`,
    description: item.description,
    chefCuisines: item.chef_cuisines.map((cuisine, index) => ({
      index,
      id: cuisine._id,
      name: cuisine.name,
      value: 6,
      image: "/assets/images/dishes/japanese.png",
    })),
    city: {
      stateCode: item.home_city[0].state_code,
      name: item.home_city[0].name,
    },
    galleryImages: item.images.map((image, index) => ({
      image: `${IMAGE_URL}${image}`,
      name: `gallery-${index + 1}`,
    })),
    rating: item.chef_review.length
      ? item.chef_review[0].rate_chef
      : item.default_star,
  };
};

/**
 * fetch user chef.profile
 *
 * @function
 * @return {Promise<Object>} chef object
 */
export const fetchUserChefProfile = async (payload) => {
  try {
    const data = await apiClient
      .get(`user/pub/get-chef-profile/${payload}`)
      .json();

    return transformUserChefProfile(data);
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * search chef
 *
 * @function
 * @param {payload}
 * @return {Promise<Object>} chef object
 */
export const searchChef = async (
  payload = {
    city: "60d9717e0aeee56963e219a0",
    day: "5",
    time: "20:18",
    name: "",
    type: "",
    cuisine_category: 1,
  }
) => {
  try {
    const data = await apiClient
      .post("user/pub/get-chef", { json: payload })
      .json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * fetch dish, cuisine and chef
 *
 * @function
 * @param {payload}
 * @return {Promise<Array>} Search Array
 */
export const fetchDishCuisineAndChef = async (
  payload = {
    name: "",
  }
) => {
  try {
    const data = await apiClient
      .post("user/pub/find-dish-cuisine-n-chef", { json: payload })
      .json();
    return data;
  } catch (err) {
    throw [];
  }
};

/**
 * fetch city
 *
 * @function
 * @param {payload}
 * @return {Promise<Array>} City Array
 */
export const fetchCity = async (
  payload = {
    name: "",
  }
) => {
  try {
    const data = await apiClient
      .post("user/pub/get-city", { json: payload })
      .json();
    return data;
  } catch (err) {
    return [];
  }
};

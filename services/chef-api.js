import apiClient from ".";
import { IMAGE_URL } from "../constants/enviroment-vars";

const transformTrendingChefs = ({ data }) => {
  return data.map((item) => ({
    id: item._id,
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
export const searchChef = async (payload) => {
  try {
    const data = await apiClient
      .post("user/pub/get-chef", { json: payload })
      .json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

const transformDishesCuisinesAndChefs = (response) => {
  if (Array.isArray(response)) return response;

  const { Dish, Cuisine, Chef } = response.data;

  const modifiedDish = Dish.length
    ? Dish.map((item) => ({
        id: item._id,
        name: item.name,
        type: "dish",
      }))
    : [];

  const modifiedCuisine = Cuisine.length
    ? Cuisine.map((item) => ({
        id: item._id,
        name: item.name,
        type: "cuisine",
      }))
    : [];

  const modifiedChef = Chef.length
    ? Chef.map((item) => ({
        id: item._id,
        name: item.first_name,
        type: "chef",
      }))
    : [];

  return [...modifiedDish, ...modifiedCuisine, ...modifiedChef];
};

/**
 * fetch dish, cuisine and chef
 *
 * @function
 * @param {payload}
 * @return {Promise<Array>} Search Array
 */
export const fetchDishesCuisinesAndChefs = async (
  payload = {
    name: "",
  }
) => {
  try {
    const data = await apiClient
      .post("user/pub/find-dish-cuisine-n-chef", { json: payload })
      .json();
    return transformDishesCuisinesAndChefs(data);
  } catch (err) {
    throw new Error(err);
  }
};

/**
 * fetch city
 *
 * @function
 * @param {payload}
 * @return {Promise<Array>} City Array
 */
export const fetchCities = async (
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

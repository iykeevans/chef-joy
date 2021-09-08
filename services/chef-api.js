import apiClient from ".";

/**
 * fetch trending chef.
 *
 * @function
 * @return {Promise<Object>} chef object
 */
export const fetchTrendingChefs = async () => {
  try {
    const data = await apiClient.get("user/pub/get-trending-chef").json();
    return data;
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
    throw new Error(err);
  }
};

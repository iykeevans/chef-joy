import apiClient from "..";
import { IMAGE_URL } from "../../constants/enviroment-vars";

const transformCuisinesAndChefs = ({ data }) => {
  return data.map((item) => ({
    name: item.name,
    chefs: item.chefCount[0],
    image: `${IMAGE_URL}${item.image1}`,
  }));
};

/**
 * Fetch user cuisines and chefs.
 *
 * @function
 * @return {Promise<Array>} All cuisines and chefs
 */
export const fetchUserCusinesAndChefs = async () => {
  try {
    const data = await apiClient.get("user/pub/get-cuisine-n-chef").json();
    return transformCuisinesAndChefs(data);
  } catch (err) {
    throw new Error(err);
  }
};

import apiClient from "..";

/**
 * Fetch user cuisines and chefs.
 *
 * @function
 * @return {Promise<Array>} All cuisines and chefs
 */
export const fetchUserCusinesAndChefs = async () => {
  try {
    const data = await apiClient.get("user/pub/get-cuisine-n-chef").json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

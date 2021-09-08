import apiClient from "..";

/**
 * Fetch user Dishes by cusineId.
 *
 * @function
 * @return {Promise<Array>} All Dishes by cuisineId
 */
export const fetchUserDishesByCuisineId = async (
  identifier = "5dad4e007b81173328ab0bff"
) => {
  try {
    const data = await apiClient
      .get(`/user/pub/get-dish-by-cusineId/${identifier}`)
      .json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

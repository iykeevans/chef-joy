import apiClient from "..";

const transformDishesByCuisineId = ({ data }) => {
  return data.map((item) => ({
    id: item.dish_id,
    duration: "Serves 2 - 45 mins",
    name: item.dish_name[0].name,
    description: item.description,
    image: "/assets/images/chefs/james.jpg",
    count: 0,
  }));
};

/**
 * Fetch user Dishes by cusineId.
 *
 * @function
 * @return {Promise<Array>} All Dishes by cuisineId
 */
export const fetchUserChefDishesByCuisineId = async (
  identifier = "5dad4e007b81173328ab0bff"
) => {
  try {
    const data = await apiClient
      .get(`user/pub/get-dish-by-cusineId/${identifier}`)
      .json();
    return transformDishesByCuisineId(data);
  } catch (err) {
    throw new Error(err);
  }
};

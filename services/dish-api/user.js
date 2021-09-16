import apiClient from "..";

const transformDishesByCuisineId = ({ data }) => {
  return data.map((item) => ({
    id: item.dish_Id,
    duration: "Serves 2 - 45 mins",
    name: item.name,
    description: item.description,
    image: "/assets/images/chefs/james.jpg",
    images: item.images,
    count: 0,
  }));
};

/**
 * Fetch user Dishes by cusineId.
 *
 * @function
 * @return {Promise<Array>} All Dishes by cuisineId
 */
export const fetchUserChefDishesByCuisineId = async (payload) => {
  try {
    const data = await apiClient
      .post("user/pub/get-dish-by-cusineId", { json: payload })
      .json();
    return transformDishesByCuisineId(data);
  } catch (err) {
    throw new Error(err);
  }
};

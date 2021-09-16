import { fetchUserChefDishesByCuisineId } from "../../services/dish-api/user";

export const fetchDishes = (payload) => async (dispatch) => {
  try {
    const response = await fetchUserChefDishesByCuisineId(payload);
    dispatch({ type: "SET_DISHES", payload: response });
  } catch (err) {
    dispatch({ type: "SET_DISHES_ERROR", payload: err.message });
    console.log(err);
  }
};

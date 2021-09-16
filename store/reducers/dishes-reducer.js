const initialState = {
  data: [],
  error: null,
};

const dishesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DISHES": {
      return { ...state, data: action.payload, error: null };
    }

    case "INCREMENT_DISH_COUNT": {
      const dishIndex = state.data.findIndex(
        (item) => item.id === action.payload
      );

      const duplicatedDishes = [...state.data];
      duplicatedDishes[dishIndex].count += 1;

      return {
        ...state,
        data: [...duplicatedDishes],
      };
    }

    case "DECREMENT_DISH_COUNT": {
      const dishIndex = state.data.findIndex(
        (item) => item.id === action.payload
      );

      const duplicatedDishes = [...state.data];
      duplicatedDishes[dishIndex].count -= 1;

      return {
        ...state,
        data: [...duplicatedDishes],
      };
    }

    case "UPDATE_DISH_COUNT": {
      //console.log(action.payload.count);
      // const clonedData = [...state.data];
      // console.log("count bef", clonedData[action.payload.dishIndex].count);
      // clonedData[action.payload.dishIndex].count = action.payload.count;
      // console.log("count aft", clonedData[action.payload.dishIndex].count);
      // return { ...state, data: clonedData };
      return { ...state, data: action.payload };
    }

    case "SET_DISHES_ERROR": {
      return { ...state, data: [], error: action.payload };
    }

    default:
      return { ...state };
  }
};

export default dishesReducer;

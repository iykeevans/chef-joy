const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const cartItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (cartItemIndex < 0) return [...state, { ...action.payload }];

      const clonedState = [...state];
      clonedState[cartItemIndex].count++;

      return clonedState;
    }

    case "REMOVE_FROM_CART": {
      const clonedState = [...state];
      const cartItemIndex = state.findIndex(
        (item) => item.id === action.payload
      );

      clonedState[cartItemIndex].count--;

      return clonedState.filter((item) => Number(item.count) !== 0);
    }

    default:
      return [...state];
  }
};

export default cartReducer;

const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART": {
      return [...state, { ...payload, count: 1 }];
    }

    case "UPDATE_CART": {
      const cartItemIndex = state.findIndex((item) => item.id === payload);

      const clonedState = [...state];
      clonedState[cartItemIndex].count++;

      return clonedState;
    }

    case "REMOVE_FROM_CART": {
      const cartItemIndex = state.findIndex((item) => item.id === payload);

      const clonedState = [...state];
      clonedState[cartItemIndex].count--;

      return clonedState.filter((item) => Number(item.count) !== 0);
    }

    default:
      return [...state];
  }
};

export default cartReducer;

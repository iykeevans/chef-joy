const initialState = {
  cuisine_category: 1,
  city: "60d9717d0aeee56963e2139c",
  time: "10:30",
  day: 3,
};

const searchPayloadReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_PAYLOAD": {
      return { ...state, ...action.payload };
    }

    default:
      return { ...state };
  }
};

export default searchPayloadReducer;

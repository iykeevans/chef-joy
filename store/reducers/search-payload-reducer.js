import { addDays, setHours, setMinutes } from "date-fns";

const initialState = {
  cuisine_category: 1,
  city: {
    id: "60d9717e0aeee56963e219a0",
    name: "San Fransisco",
  },
  date: setMinutes(setHours(addDays(new Date(), 1), 11), 0),
  name: {},
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

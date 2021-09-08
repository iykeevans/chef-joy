import * as types from "../../constants/types";

const initialState = {
  isLoggedIn: false,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_CHEF:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case types.LOGOUT_CHEF:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    case types.LOGIN_CHEF_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
        err: action.payload,
      };
    default:
      return { ...state };
  }
};

export default authReducer;

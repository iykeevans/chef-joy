import {
  LOGIN_CHEF,
  LOGIN_CHEF_FAILED,
  SET_ERROR,
} from "../../constants/types";
import * as authServices from "../../services/auth-api/chef";

export const loginChef = (payload) => async (dispatch) => {
  try {
    const { data } = await authServices.loginChef(payload);
    dispatch({ type: LOGIN_CHEF, payload: data.user });
    console.log("----->>", data);
  } catch (err) {
    dispatch({ type: LOGIN_CHEF_FAILED, payload: err });
  }
};

export const signUpChef = (payload) => async (dispatch) => {
  try {
    const data = await authServices.signUpChef(payload);
    dispatch({ type: LOGIN_CHEF, payload: data.user });
    console.log("----->>", data);
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
    throw new Error(err);
  }
};

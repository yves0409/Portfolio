import {
  GET_BACKGROUND_REQUEST,
  GET_BACKGROUND_SUCCESS,
  GET_BACKGROUND_FAIL,
} from "../types";

//GET BACKGROUNDS
export const getBackgroundReducer = (state = { backgroundss: [] }, action) => {
  switch (action.type) {
    case GET_BACKGROUND_REQUEST:
      return {
        loading: true,
        backgrounds: [],
      };
    case GET_BACKGROUND_SUCCESS:
      return {
        loading: false,
        backgrounds: action.payload,
      };
    case GET_BACKGROUND_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

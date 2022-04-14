import {
  GET_BACKGROUND_REQUEST,
  GET_BACKGROUND_SUCCESS,
  GET_BACKGROUND_FAIL,
} from "../types";

//GET BACKGROUNDS
export const getBackgroundReducer = (state = { backgrounds: [] }, action) => {
  switch (action.type) {
    case GET_BACKGROUND_REQUEST:
      return {
        loading: true,
        success: false,
        backgrounds: [],
      };
    case GET_BACKGROUND_SUCCESS:
      return {
        loading: false,
        success: true,
        backgrounds: action.payload,
      };
    case GET_BACKGROUND_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

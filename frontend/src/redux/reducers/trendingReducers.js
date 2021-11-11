import {
  GET_TRENDING_REQUEST,
  GET_TRENDING_SUCCESS,
  GET_TRENDING_FAIL,
} from "../types";

//GET REVIEWS
export const getTrendingReducer = (state = { trendings: [] }, action) => {
  switch (action.type) {
    case GET_TRENDING_REQUEST:
      return {
        loading: true,
        trendings: [],
      };
    case GET_TRENDING_SUCCESS:
      return {
        loading: false,
        trendings: action.payload,
      };
    case GET_TRENDING_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

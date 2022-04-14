import { GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL } from "../types";

//GET INFO
export const getInfoReducer = (state = { infos: [] }, action) => {
  switch (action.type) {
    case GET_INFO_REQUEST:
      return {
        loading: true,
        success: false,
        infos: [],
      };
    case GET_INFO_SUCCESS:
      return {
        loading: false,
        success: true,
        infos: action.payload,
      };
    case GET_INFO_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

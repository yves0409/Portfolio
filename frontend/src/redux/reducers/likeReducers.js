import {
    USER_LIKE_REQUEST,
    USER_LIKE_SUCCESS,
    USER_LIKE_FAIL,
  } from "../types";


 export const likeReducer = (state={}, action) => {
    switch (action.type) {
      case USER_LIKE_REQUEST:
        return {
          loading: true,
        };
      case USER_LIKE_SUCCESS:
        return {
          loading: false,
          success:true,
          likes: action.payload, 
        };
      case USER_LIKE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
        default:
            return state;
    }
  };
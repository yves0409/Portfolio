import {
  POST_LIKE_REQUEST,
  POST_LIKE_SUCCESS,
  POST_LIKE_FAIL,
  GET_LIKE_REQUEST,
  GET_LIKE_SUCCESS,
  GET_LIKE_FAIL,
} from "../types";

//POST LIKE REDUCER

export const postLikeReducer = (state = "80", action) => {
  switch (action.type) {
    case POST_LIKE_REQUEST:
      return {
        loading: true,
        success: false,
        likeCount: {},
      };
    case POST_LIKE_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        likeCount: action.payload,
      };
    case POST_LIKE_FAIL:
      return {
        loading: false,
        err: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

//GET REVIEWS
export const getLikeReducer = (state = { likes: [] }, action) => {
  switch (action.type) {
    case GET_LIKE_REQUEST:
      return {
        loading: true,
        likes: [],
      };
    case GET_LIKE_SUCCESS:
      return {
        loading: false,
        likes: action.payload,
      };
    case GET_LIKE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

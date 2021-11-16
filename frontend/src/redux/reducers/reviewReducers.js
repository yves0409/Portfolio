import {
  POST_REVIEW_REQUEST,
  POST_REVIEW_SUCCESS,
  POST_REVIEW_FAIL,
  GET_REVIEW_REQUEST,
  GET_REVIEW_SUCCESS,
  GET_REVIEW_FAIL,
} from "../types";

//POST REVIEW REDUCER
export const postReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_REVIEW_REQUEST:
      return {
        loading: true,
        success: false,
      };
    case POST_REVIEW_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        postedReviews: action.payload, //See userController (userInfo: _id,name,email,isAdmin)
      };
    case POST_REVIEW_FAIL:
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
export const getReviewReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case GET_REVIEW_REQUEST:
      return {
        loading: true,
        reviews: [],
      };
    case GET_REVIEW_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      };
    case GET_REVIEW_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

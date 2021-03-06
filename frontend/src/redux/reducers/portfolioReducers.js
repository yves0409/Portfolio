import {
  GET_PORTFOLIO_REQUEST,
  GET_PORTFOLIO_SUCCESS,
  GET_PORTFOLIO_FAIL,
} from "../types";

//GET PORTFOLIOS
export const getPortfolioReducer = (state = { portfolios: [] }, action) => {
  switch (action.type) {
    case GET_PORTFOLIO_REQUEST:
      return {
        loading: true,
        success: false,
        portfolios: [],
      };
    case GET_PORTFOLIO_SUCCESS:
      return {
        loading: false,
        success: true,
        portfolios: action.payload,
      };
    case GET_PORTFOLIO_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

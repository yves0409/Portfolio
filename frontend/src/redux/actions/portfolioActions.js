import axios from "axios";
import {
  GET_PORTFOLIO_REQUEST,
  GET_PORTFOLIO_SUCCESS,
  GET_PORTFOLIO_FAIL,
} from "../types";

//GET PORTFOLIO
export const getPortfolio = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PORTFOLIO_REQUEST,
    });

    const { data } = await axios.get("/api/portfolio");

    dispatch({
      type: GET_PORTFOLIO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PORTFOLIO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

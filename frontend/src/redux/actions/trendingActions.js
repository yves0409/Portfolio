import axios from "axios";
import {
  GET_TRENDING_REQUEST,
  GET_TRENDING_SUCCESS,
  GET_TRENDING_FAIL,
} from "../types";

//GET TRENDINGS
export const getTrendingTopics = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_TRENDING_REQUEST,
    });

    const { data } = await axios.get("/api/trending");

    dispatch({
      type: GET_TRENDING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TRENDING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

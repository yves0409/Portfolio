import axios from "axios";
import {
  POST_REVIEW_REQUEST,
  POST_REVIEW_SUCCESS,
  POST_REVIEW_FAIL,
  GET_REVIEW_REQUEST,
  GET_REVIEW_SUCCESS,
  GET_REVIEW_FAIL,
} from "../types";

//ADD REVIEW
export const review = (name, reviewText) => async (dispatch) => {
  try {
    dispatch({
      type: POST_REVIEW_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/review/add",
      { name, reviewText },
      config
    );

    dispatch({
      type: POST_REVIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//GET REVIEW
export const getreview = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_REVIEW_REQUEST,
    });

    const { data } = await axios.get("/api/review");

    dispatch({
      type: GET_REVIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

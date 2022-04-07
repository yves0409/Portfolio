import axios from "axios";
import {
  GET_BACKGROUND_REQUEST,
  GET_BACKGROUND_SUCCESS,
  GET_BACKGROUND_FAIL,
} from "../types";

//GET BACKGROUND
export const getBackground = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_BACKGROUND_REQUEST,
    });

    const { data } = await axios.get("/api/background");

    dispatch({
      type: GET_BACKGROUND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_BACKGROUND_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

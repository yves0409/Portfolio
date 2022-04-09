import axios from "axios";
import {
  GET_SERVICE_REQUEST,
  GET_SERVICE_SUCCESS,
  GET_SERVICE_FAIL,
} from "../types";

//GET REVIEW
export const getServices = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_SERVICE_REQUEST,
    });

    const { data } = await axios.get("/api/service");

    dispatch({
      type: GET_SERVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SERVICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

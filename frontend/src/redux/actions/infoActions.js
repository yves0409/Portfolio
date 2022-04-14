import axios from "axios";
import { GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL } from "../types";

//GET INFO
export const getInfo = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_INFO_REQUEST,
    });

    const { data } = await axios.get("/api/info");

    dispatch({
      type: GET_INFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

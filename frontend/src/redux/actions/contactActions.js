import axios from "axios";
import {
  GET_CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
} from "../types";

//GET INFO
export const getContact = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_CONTACT_REQUEST,
    });

    const { data } = await axios.get("/api/contact");

    dispatch({
      type: GET_CONTACT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CONTACT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

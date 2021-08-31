import axios from "axios";
import {
  USER_LIKE_REQUEST,
  USER_LIKE_SUCCESS,
  USER_LIKE_FAIL,
  
  } from "../types";

export const likeAction = () => async (dispatch) => {
    try {
      dispatch({
        type: USER_LIKE_REQUEST,
      });
  
      
     const { data } = await axios.get(
        "/api/like",
       );
  
      dispatch({
        type: USER_LIKE_SUCCESS,
        payload: data,
      });
  
    
    } catch (error) {
      dispatch({
        type: USER_LIKE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
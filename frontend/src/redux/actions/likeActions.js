// import axios from "axios";
// import {
//   POST_LIKE_REQUEST,
//   POST_LIKE_SUCCESS,
//   POST_LIKE_FAIL,
//   GET_LIKE_REQUEST,
//   GET_LIKE_SUCCESS,
//   GET_LIKE_FAIL,
// } from "../types";

// //ADD LIKE
// export const postLike = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: POST_LIKE_REQUEST,
//     });

//     const { data } = await axios.put("/api/like/61ffeec1e68829a6980208a7");

//     dispatch({
//       type: POST_LIKE_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: POST_LIKE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// //GET LIKE
// export const getLike = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: GET_LIKE_REQUEST,
//     });

//     const { data } = await axios.get("/api/like");

//     dispatch({
//       type: GET_LIKE_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_LIKE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

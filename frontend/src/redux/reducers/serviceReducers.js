// import {
//   GET_SERVICE_REQUEST,
//   GET_SERVICE_SUCCESS,
//   GET_SERVICE_FAIL,
// } from "../types";

// //GET SERVICES
// export const getServiceReducer = (state = { services: [] }, action) => {
//   switch (action.type) {
//     case GET_SERVICE_REQUEST:
//       return {
//         loading: true,
//         success: false,
//         services: [],
//       };
//     case GET_SERVICE_SUCCESS:
//       return {
//         loading: false,
//         success: true,
//         services: action.payload,
//       };
//     case GET_SERVICE_FAIL:
//       return {
//         loading: false,
//         success: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

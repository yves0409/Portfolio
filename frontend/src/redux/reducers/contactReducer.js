import {
  GET_CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
} from "../types";

//GET CONTACT
export const getContactReducer = (state = { contacts: [] }, action) => {
  switch (action.type) {
    case GET_CONTACT_REQUEST:
      return {
        loading: true,
        success: false,
        contacts: [],
      };
    case GET_CONTACT_SUCCESS:
      return {
        loading: false,
        success: true,
        contacts: action.payload,
      };
    case GET_CONTACT_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

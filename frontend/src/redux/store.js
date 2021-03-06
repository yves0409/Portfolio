import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { postReviewReducer, getReviewReducer } from "./reducers/reviewReducers";
import { getPortfolioReducer } from "./reducers/portfolioReducers";
import { getBackgroundReducer } from "./reducers/backgroundReducers";
import { getTrendingReducer } from "./reducers/trendingReducers";
import { getContactReducer } from "./reducers/contactReducer";
import { getInfoReducer } from "./reducers/infoReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  reviewsAdded: postReviewReducer,
  reviewList: getReviewReducer,
  contactList: getContactReducer,
  portfolioList: getPortfolioReducer,
  backgroundList: getBackgroundReducer,
  trendingList: getTrendingReducer,
  infoList: getInfoReducer,
});

//if userInfo is in localStorage , set it to the userInfoFromStorage variable
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  reviewsAdded: {},
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

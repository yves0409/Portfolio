import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { postReviewReducer, getReviewReducer } from "./reducers/reviewReducers";
import { getPortfolioReducer } from "./reducers/portfolioReducers";
import { getBackgroundReducer } from "./reducers/backgroundReducers";
import { getTrendingReducer } from "./reducers/trendingReducers";
import { getServiceReducer } from "./reducers/serviceReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  reviewsAdded: postReviewReducer,
  reviewList: getReviewReducer,
  serviceList: getServiceReducer,
  portfolioList: getPortfolioReducer,
  backgroundList: getBackgroundReducer,
  trendingList: getTrendingReducer,
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

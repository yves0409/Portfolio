import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { postReviewReducer, getReviewReducer } from "./reducers/reviewReducers";
import { getPortfolioReducer } from "./reducers/portfolioReducers";
//import { likeReducer } from "./reducers/likeReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  //pageLikeReducer: likeReducer,
  reviewsAdded: postReviewReducer,
  reviewList: getReviewReducer,
  portfolioList: getPortfolioReducer,
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

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import NewsfeedReducer from "./newsfeed";
import LoadingReducer from "./loading";
import UserReducer from "./user";
import ErrorReducer from "./error";

const rootReducer = combineReducers({
  newsfeed: NewsfeedReducer,
  loading: LoadingReducer,
  error: ErrorReducer,
  user: UserReducer,

  // Add other reducers here if you have any
});

const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = useDispatch;
export default store;

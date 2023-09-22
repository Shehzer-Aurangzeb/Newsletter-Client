import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import NewsfeedReducer from "./newsfeed";
import LoadingReducer from "./loading";

const rootReducer = combineReducers({
  newsfeed: NewsfeedReducer,
  loading: LoadingReducer,

  // Add other reducers here if you have any
});

const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = useDispatch;
export default store;

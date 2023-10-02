import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsfeeds: [],
  selectedNewsfeed: undefined,
  unpreviewedNewsfeed: undefined,
  fetchedNewsfeeds: [],
};

const newsfeedSlice = createSlice({
  name: "newsfeed",
  initialState,
  reducers: {
    setNewsfeedsAction: (state, action) => {
      return {
        ...state,
        newsfeeds: action.payload,
      };
    },
    setUnpreviewedNewsfeedAction: (state, action) => {
      return {
        ...state,
        unpreviewedNewsfeed: action.payload,
      };
    },
    updateNewsfeedsAction: (state, action) => {
      return {
        ...state,
        newsfeeds: [...state.newsfeeds, action.payload],
      };
    },
    setSelectedNewsfeedAction: (state, action) => {
      return {
        ...state,
        selectedNewsfeed: action.payload,
      };
    },
    setFetchedNewsfeedsAction: (state, action) => {
      return {
        ...state,
        fetchedNewsfeeds: [...state.fetchedNewsfeeds, action.payload],
      };
    },
  },
});

export const {
  setNewsfeedsAction,
  setSelectedNewsfeedAction,
  setFetchedNewsfeedsAction,
  updateNewsfeedsAction,
  setUnpreviewedNewsfeedAction,
} = newsfeedSlice.actions;
export default newsfeedSlice.reducer;

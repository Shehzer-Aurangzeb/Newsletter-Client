import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import {
  setFetchedNewsfeedsAction,
  setNewsfeedsAction,
  setSelectedNewsfeedAction,
  updateNewsfeedsAction,
} from ".";

export const useNewsfeed = () => {
  const { newsfeeds, selectedNewsfeed, fetchedNewsfeeds } = useSelector(
    (state) => state.newsfeed
  );
  const dispatch = useAppDispatch();

  const setNewsfeeds = useCallback(
    (payload) => {
      dispatch(setNewsfeedsAction(payload));
    },
    [dispatch]
  );
  const updateNewsfeeds = useCallback(
    (payload) => {
      dispatch(updateNewsfeedsAction(payload));
    },
    [dispatch]
  );
  const setSelectedNewsfeed = useCallback(
    (payload) => {
      dispatch(setSelectedNewsfeedAction(payload));
    },
    [dispatch]
  );
  const setFetchedNewsfeeds = useCallback(
    (payload) => {
      dispatch(setFetchedNewsfeedsAction(payload));
    },
    [dispatch]
  );

  return {
    setNewsfeeds,
    selectedNewsfeed,
    setSelectedNewsfeed,
    newsfeeds,
    fetchedNewsfeeds,
    setFetchedNewsfeeds,
    updateNewsfeeds,
  };
};

import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsFeed from "../pages/Newsfeed";
import NewsFeedPreview from "../pages/Newsfeed/Preview";
import CreateNewsFeed from "../pages/Newsfeed/Create";
import Home from "../pages/Home";
import { PATHS } from "../constants";

const Router = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.CREATE} element={<CreateNewsFeed />} exact />
      <Route path={`${PATHS.EDIT}/:id`} element={<CreateNewsFeed />} exact />
      <Route path={`${PATHS.NEWSFEED}/:id`} element={<NewsFeed />} />
      <Route
        path={`${PATHS.NEWSFEED}/:id/preview`}
        element={<NewsFeedPreview />}
      />
    </Routes>
  );
};
export default Router;

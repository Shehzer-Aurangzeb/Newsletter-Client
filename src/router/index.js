import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsFeed from "../pages/Newsfeed";
import CreateNewsFeed from "../pages/Newsfeed/Create";
import Home from "../pages/Home";
import { PATHS } from "../constants";

const Router = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.CREATE} element={<CreateNewsFeed />} exact />
      <Route path={`${PATHS.NEWSFEED}/:id`} element={<NewsFeed />} />
    </Routes>
  );
};
export default Router;

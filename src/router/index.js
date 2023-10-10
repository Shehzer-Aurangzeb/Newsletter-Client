import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsFeed from "../pages/Newsfeed";
import NewsFeedPreview from "../pages/Newsfeed/Preview";
import CreateNewsFeed from "../pages/Newsfeed/Create";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import { PATHS } from "../constants";

const Router = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.SIGNIN} element={<Login />} />

      <Route
        path={PATHS.CREATE}
        element={
          <ProtectedRoute>
            <CreateNewsFeed />
          </ProtectedRoute>
        }
        exact
      />
      <Route
        path={`${PATHS.EDIT}/:id`}
        element={
          <ProtectedRoute>
            <CreateNewsFeed />
          </ProtectedRoute>
        }
        exact
      />
      <Route path={`${PATHS.NEWSFEED}/:id`} element={<NewsFeed />} />
      <Route
        path={`${PATHS.NEWSFEED}/:id/preview`}
        element={
          <ProtectedRoute>
            <NewsFeedPreview />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
export default Router;

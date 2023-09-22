import React, { Fragment } from "react";
import Loader from "./Loader";

const DataLoaderOverlay = ({ isLoading, children }) => {
  return (
    <Fragment>
      {isLoading ? (
        <div className="h-screen w-screen overflow-hidden pointer-events-none z-30 relative p-0 m-0 bg-transparent">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Loader />
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </Fragment>
  );
};

export default DataLoaderOverlay;

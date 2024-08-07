import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants";

function Error({ error }) {
  return (
    <div className="h-screen w-full relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-3 items-center">
        <h1 className="font-nunito font-bold text-2xl text-link text-center">
          {error}
        </h1>
        <Link to={PATHS.HOME} className="link text-center">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default Error;

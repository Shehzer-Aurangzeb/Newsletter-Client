import React, { useEffect } from "react";
import DataLoaderOverlay from "../../components/DataLoaderOverlay";
import { useLoading } from "../../state/loading/hooks";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants";
import { useNewsfeed } from "../../state/newsfeed/hooks";
import { useApp } from "../../context/AppProvider";

function Home() {
  const { isLoading } = useLoading();
  const { newsfeeds } = useNewsfeed();
  const { initApp } = useApp();

  useEffect(() => {
    initApp();
  }, []);
  return (
    <DataLoaderOverlay isLoading={isLoading}>
      <div className="h-screen w-full relative">
        {newsfeeds.length > 0 ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-3 items-center">
            <h1 className="font-nunito font-bold text-2xl text-link ">
              Newsletter App Home
            </h1>
            <Link
              to={`${PATHS.NEWSFEED}/${newsfeeds[0]}`}
              className="text-center bg-transparent border border-solid border-black px-8 py-2 transiton duration-300 hover:bg-black hover:text-white hover:border-white "
            >
              Go to Latest Newsletter
            </Link>
          </div>
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-3 items-center">
            <h1 className="font-nunito font-bold text-2xl text-link ">
              No Newsfeeds to show
            </h1>
            <Link
              to={PATHS.CREATE}
              className="text-center bg-transparent border border-solid border-black px-8 py-2 transiton duration-300 hover:bg-black hover:text-white hover:border-white "
            >
              Create Newsfeed
            </Link>
          </div>
        )}
      </div>
    </DataLoaderOverlay>
  );
}

export default Home;

import React from "react";
import DataLoaderOverlay from "../../components/DataLoaderOverlay";
import { useLoading } from "../../state/loading/hooks";
import { useNewsfeed } from "../../state/newsfeed/hooks";
import { useUser } from "../../state/user/hooks";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants";
import Divider from "../../components/Divider";

function Home() {
  const { isLoading } = useLoading();
  const { newsfeeds } = useNewsfeed();
  const { isAuthenticated } = useUser();

  return (
    <DataLoaderOverlay isLoading={isLoading}>
      <div className="h-screen w-full relative">
        {newsfeeds.length > 0 ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-3 items-center max-w-[400px]">
            <h1 className="font-nunito font-bold text-2xl text-link ">
              Newsletter App Home
            </h1>
            <Link
              to={`${PATHS.NEWSFEED}/${newsfeeds[0]}`}
              className="text-center link w-full"
            >
              Go to Latest Newsletter
            </Link>
            {!isAuthenticated && (
              <>
                <Divider />
                <Link to={PATHS.SIGNIN} className="text-center link w-full">
                  Log In
                </Link>
              </>
            )}
          </div>
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-3 items-center">
            <h1 className="font-nunito font-bold text-2xl text-link ">
              No Newsfeeds to show
            </h1>
            <Link to={PATHS.CREATE} className="text-center link">
              Create Newsfeed
            </Link>
          </div>
        )}
      </div>
    </DataLoaderOverlay>
  );
}

export default Home;

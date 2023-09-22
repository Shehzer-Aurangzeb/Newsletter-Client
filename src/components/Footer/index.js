import React, { useCallback } from "react";
import { arrowIcon } from "../../constants/assets";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants";

function Footer({ newsfeedsIds, selectedNewsfeedId }) {
  const navigate = useNavigate();
  const getNewsfeedId = useCallback(
    (action) => {
      if (action === "prev") {
        return newsfeedsIds[newsfeedsIds.indexOf(selectedNewsfeedId) - 1];
      }
      if (action === "next") {
        return newsfeedsIds[newsfeedsIds.indexOf(selectedNewsfeedId) + 1];
      }
    },
    [newsfeedsIds, selectedNewsfeedId]
  );
  const handleButtonClick = useCallback(
    (action) => {
      return navigate(`${PATHS.NEWSFEED}/${getNewsfeedId(action)}`);
    },
    [navigate, getNewsfeedId]
  );

  const isNewsfeedLast = useCallback(() => {
    return newsfeedsIds.indexOf(selectedNewsfeedId) === newsfeedsIds.length - 1;
  }, [newsfeedsIds, selectedNewsfeedId]);
  const isNewsfeedFirst = useCallback(() => {
    return newsfeedsIds.indexOf(selectedNewsfeedId) === 0;
  }, [newsfeedsIds, selectedNewsfeedId]);

  return (
    <div className="sticky bottom-0 left-0 right-0 bg-light w-full md:h-[80px] border-t-[1px] border-solid border-black md:p-[37px] p-8 md:block flex flex-col gap-y-5 justify-center items-center z-30">
      <div className="flex flex-row gap-x-20 w-fit mx-auto">
        <button
          className="flex flex-row gap-x-2 items-center disabled:cursor-not-allowed"
          onClick={() => handleButtonClick("prev")}
          disabled={isNewsfeedFirst()}
        >
          <img
            src={arrowIcon}
            alt="arrow-prev"
            className={`object-contain w-[25px] ${
              isNewsfeedFirst() && "opacity-70"
            }`}
          />
          <span
            className={`text-xl font-nunito text-link font-bold uppercase ${
              isNewsfeedFirst() && "opacity-70"
            }`}
          >
            Previous
          </span>
        </button>
        <button
          className="flex flex-row gap-x-2 items-center disabled:cursor-not-allowed"
          onClick={() => handleButtonClick("next")}
          disabled={isNewsfeedLast()}
        >
          <span
            className={`text-xl font-nunito text-link font-bold uppercase ${
              isNewsfeedLast() && "opacity-70"
            }`}
          >
            Next
          </span>
          <img
            src={arrowIcon}
            alt="arrow-prev"
            className={`object-contain w-[25px] rotate-180 ${
              isNewsfeedLast() && "opacity-70"
            }`}
          />
        </button>
      </div>
      <Link
        to={"/newsfeed/create"}
        className="md:absolute md:right-[37px] md:top-1/2 md:-translate-y-1/2 bg-transparent border border-solid border-black px-8 py-2 transiton duration-300 hover:bg-black hover:text-white hover:border-white"
      >
        Create Post
      </Link>
    </div>
  );
}

export default Footer;

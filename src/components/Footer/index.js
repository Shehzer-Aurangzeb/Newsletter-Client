import React, { useCallback, useState } from "react";
import { arrowIcon, copyIcon } from "../../constants/assets";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants";
import Button from "../Button";
import { useApp } from "../../context/AppProvider";
import { useUser } from "../../state/user/hooks";

function Footer({
  newsfeedsIds,
  selectedNewsfeedId,
  isPreviewMode,
  unpreviewedNewsfeed,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { createNewsfeed } = useApp();
  const { pathname } = useLocation();
  const { isAuthenticated } = useUser();

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

  const handleSubmit = useCallback(async () => {
    setIsLoading(true);
    const response = await createNewsfeed(unpreviewedNewsfeed);
    if (response.id) navigate(`${PATHS.NEWSFEED}/${response.id}`);
    setIsLoading(false);
  }, [unpreviewedNewsfeed, createNewsfeed, navigate]);

  const handleButtonClick = useCallback(
    (action) => {
      return navigate(`${PATHS.NEWSFEED}/${getNewsfeedId(action)}`);
    },
    [navigate, getNewsfeedId]
  );

  const handleCopyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(`http://localhost:3000/${pathname}`);
  }, [pathname]);

  const isNewsfeedLast = useCallback(() => {
    return newsfeedsIds.indexOf(selectedNewsfeedId) === newsfeedsIds.length - 1;
  }, [newsfeedsIds, selectedNewsfeedId]);
  const isNewsfeedFirst = useCallback(() => {
    return newsfeedsIds.indexOf(selectedNewsfeedId) === 0;
  }, [newsfeedsIds, selectedNewsfeedId]);

  return (
    <div className="sticky bottom-0 left-0 right-0 bg-light w-full md:h-[80px] border-t-[1px] border-solid border-black md:px-[37px] px-8 py-5 md:block flex flex-col gap-y-5 justify-center items-center z-30">
      <div
        className={`flex flex-row ${
          isPreviewMode ? "gap-x-10 mb-5" : "gap-x-20"
        } w-fit mx-auto`}
      >
        {isPreviewMode ? (
          <>
            <Button
              title="Edit"
              disabled={isLoading}
              onClick={() => {
                navigate(`${PATHS.EDIT}/${selectedNewsfeedId}`);
              }}
            />

            <Button
              title={"Submit"}
              isLoading={isLoading}
              onClick={handleSubmit}
            />
          </>
        ) : (
          <>
            {" "}
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
          </>
        )}
      </div>
      {isAuthenticated && !isPreviewMode && (
        <Link
          to={PATHS.CREATE}
          className="md:absolute md:right-[37px] md:top-1/2 md:-translate-y-1/2 link"
        >
          Create Post
        </Link>
      )}
      {isPreviewMode && (
        <Button
          className="md:absolute md:left-[37px] md:top-1/2 md:-translate-y-1/2"
          icon={copyIcon}
          title="Copy"
          onClick={handleCopyToClipboard}
        />
      )}
    </div>
  );
}

export default Footer;

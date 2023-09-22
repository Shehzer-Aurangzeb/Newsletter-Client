import React, { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { eyeIcon, copyIcon } from "../../../../constants/assets";
import { PATHS } from "../../../../constants/index";
function SuccessActions({ disable, id }) {
  const copyIconRef = useRef(null);
  const eyeIconRef = useRef(null);

  const handleCopyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(
      `http://localhost:3000${PATHS.NEWSFEED}/${id}`
    );
  }, [id]);
  const addClass = useCallback((ref) => {
    ref.current.parentElement.addEventListener("mouseenter", () => {
      ref.current.classList.add("invert-[1]");
    });
    ref.current.parentElement.addEventListener("mouseleave", () => {
      ref.current.classList.remove("invert-[1]");
    });
  }, []);
  useEffect(() => {
    if (!copyIconRef || !eyeIconRef) return;
    if (!copyIconRef.current || !eyeIconRef.current) return;
    addClass(copyIconRef);
    addClass(eyeIconRef);
  }, [addClass]);
  return (
    <div
      className={`w-full  flex flex-row gap-x-5 justify-center items-center  transition duration-300 ${
        disable
          ? "-translate-y-4 opacity-0 invisible mt-0 h-0"
          : "h-fit translate-y-0 opacity-100 visible mt-5 "
      }`}
    >
      <Link
        to={`${PATHS.NEWSFEED}/${id}`}
        className="flex flex-row gap-x-3 items-center bg-transparent border border-solid border-black px-5 py-2 transiton duration-300 hover:bg-black hover:text-white hover:border-white"
      >
        <img
          ref={eyeIconRef}
          src={eyeIcon}
          alt="preview--icon"
          className="w-[25px] object-contain"
        />
        Preview
      </Link>
      <button
        className="flex flex-row gap-x-3 items-center bg-transparent border border-solid border-black px-5 py-2 transiton duration-300 hover:bg-black hover:text-white hover:border-white"
        onClick={handleCopyToClipboard}
      >
        <img
          ref={copyIconRef}
          src={copyIcon}
          alt="preview--icon"
          className="w-[25px] object-contain"
        />
        Copy Link
      </button>
    </div>
  );
}

export default SuccessActions;

import React, { useCallback, useEffect, useRef } from "react";
import Loader from "../Loader";

function Button({
  onClick,
  type = "button",
  title,
  isLoading,
  className = "",
  disabled,
  style,
  icon,
}) {
  const iconRef = useRef(null);
  const addClass = useCallback((ref) => {
    ref.current.parentElement.addEventListener("mouseenter", () => {
      ref.current.classList.add("invert-[1]");
    });
    ref.current.parentElement.addEventListener("mouseleave", () => {
      ref.current.classList.remove("invert-[1]");
    });
  }, []);
  useEffect(() => {
    if (!iconRef) return;
    if (!iconRef.current) return;
    addClass(iconRef);
  }, [addClass]);
  return (
    <button
      className={[
        "flex flex-row gap-x-3 items-center justify-center bg-transparent border border-solid border-black px-8 py-2 transiton duration-300 hover:bg-black hover:text-white hover:border-white   disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white disabled:hover:border-black ",
        className,
      ].join(" ")}
      onClick={onClick}
      type={type}
      style={style}
      disabled={isLoading || disabled}
    >
      {icon && (
        <img
          ref={iconRef}
          src={icon}
          alt="btn--icon"
          className={`w-[22px] object-contain ${isLoading && "opacity-0"}`}
        />
      )}
      {isLoading ? (
        <Loader
          style={{
            color: "#000",
            margin: "0 auto",
          }}
        />
      ) : (
        title
      )}
    </button>
  );
}
export default Button;

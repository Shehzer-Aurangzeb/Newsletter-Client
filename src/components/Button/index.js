import React from "react";
import Loader from "../Loader";

function Button({
  onClick,
  type = "button",
  title,
  isLoading,
  className = "",
  style,
}) {
  return (
    <button
      className={[
        "bg-transparent border border-solid border-black px-8 py-2 transiton duration-300 hover:bg-black hover:text-white hover:border-white   disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-white disabled:hover:border-black ",
        className,
      ].join(" ")}
      onClick={onClick}
      type={type}
      style={style}
      disabled={isLoading}
    >
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

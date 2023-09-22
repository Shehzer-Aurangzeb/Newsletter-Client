import React from "react";

function Heading({ className, text }) {
  return (
    <h2
      className={[
        "text-center font-nunito text-2xl font-normal text-black",
        className,
      ].join(" ")}
    >
      {text}
    </h2>
  );
}

export default Heading;

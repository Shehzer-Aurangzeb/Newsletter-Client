import React from "react";

function Description({ className, text }) {
  return (
    <p
      className={[
        "text-lightBlack text-[15px] font-nunito font-normal text-center",
        className,
      ].join(" ")}
    >
      {text}
    </p>
  );
}

export default Description;

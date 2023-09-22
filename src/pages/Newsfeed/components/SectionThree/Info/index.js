import React from "react";

function Info({ image, heading, description }) {
  return (
    <div className="flex flex-col gap-y-[10px] md:max-w-[32%] w-full">
      <img src={image} alt="info-pic" className="w-full object-contain" />
      <h3 className="text-center text-lg font-nunito font-normal text-black">
        {heading}
      </h3>
      <p className="text-[15px] text-lightBlack font-nunito">{description}</p>
    </div>
  );
}

export default Info;

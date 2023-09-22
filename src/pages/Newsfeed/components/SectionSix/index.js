import React from "react";
import Info from "./Info";

function SectionSix({ image, figures }) {
  return (
    <div
      className="w-full bg-cover bg-center py-[60px] relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute h-full w-full inset-0 z-1 opacity-30 bg-black" />
      <div className="flex flex-row w-full gap-x-[2px] z-10 relative">
        {figures.map(({ field, figure }, index) => (
          <Info number={figure} title={field} key={index} />
        ))}
      </div>
    </div>
  );
}

export default SectionSix;

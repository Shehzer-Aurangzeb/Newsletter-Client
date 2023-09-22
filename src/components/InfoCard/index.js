import React from "react";
import { Link } from "react-router-dom";

function InfoCard({ icon, heading, description, link }) {
  return (
    <div className="flex flex-col gap-y-[10px] md:max-w-[300px] w-full">
      <img
        src={icon}
        alt="Card-pic"
        className="w-[70px] h-[105px] object-contain mx-auto"
      />
      <h3 className="text-center text-lg font-nunito font-normal text-black">
        {heading}
      </h3>
      <p className="text-[15px] text-lightBlack font-nunito text-center">
        {description}
      </p>
      {link && (
        <Link
          to={link}
          className="text-link uppercase text-sm font-nunito font-bold text-center mt-2"
        >
          Read More
        </Link>
      )}
    </div>
  );
}

export default InfoCard;

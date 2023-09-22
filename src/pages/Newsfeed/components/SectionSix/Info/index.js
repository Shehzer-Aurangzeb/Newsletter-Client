import React from "react";

function Info({ number, title }) {
  return (
    <div className="w-full text-center">
      <span className="text-white block font-nunito text-[34px] font-bold w-full">
        {number}
      </span>
      <span className="text-[#ffffffe6] block font-nunito text-[13px] font-bold bg-darkblue w-full ">
        {title}
      </span>
    </div>
  );
}

export default Info;

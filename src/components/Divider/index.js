import React from "react";

function Divider() {
  return (
    <div className="flex flex-row w-full items-center gap-x-2">
      <span className="w-full bg-black border-[0.5px] border-solid border-black" />
      <span className="text-black text-center text-base">or</span>
      <span className="w-full bg-black border-[0.5px] border-solid border-black" />
    </div>
  );
}

export default Divider;

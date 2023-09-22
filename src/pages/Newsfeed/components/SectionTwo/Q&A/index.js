import React from "react";

function QandA({ question, answer }) {
  return (
    <div>
      <h1 className="text-black font-nunito font-normal text-lg mb-1">
        {question}
      </h1>
      <p className="text-lightBlack font-nunito font-normal text-[15px]">
        {answer}
      </p>
    </div>
  );
}

export default QandA;

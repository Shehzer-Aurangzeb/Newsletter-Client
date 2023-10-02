import React from "react";
import QandA from "./Q&A";

function SectionTwo({ title, image, qnA }) {
  return (
    <div className="bg-light flex md:flex-row flex-col gap-y-5 md:p-[37px] p-8 gap-x-4">
      <div className="flex flex-col gap-y-5 w-full">
        <h1 className="text-black font-nunito font-normal text-[24px]">
          {title}
        </h1>
        {qnA.map(({ question, answer }, index) => (
          <QandA key={index} question={question} answer={answer} />
        ))}
      </div>
      {image && (
        <img
          alt="section-two-pic"
          src={image}
          className="object-contain w-full md:max-w-[50%] md:mt-1"
        />
      )}
    </div>
  );
}

export default SectionTwo;

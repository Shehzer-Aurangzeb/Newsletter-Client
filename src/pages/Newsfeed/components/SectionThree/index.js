import React from "react";
import Info from "./Info";
import Heading from "../../../../components/Heading";
import Description from "../../../../components/Description";

function SectionThree({ title, description, posts }) {
  return (
    <div className="bg-white md:p-[37px] p-8 flex flex-col gap-y-5">
      <Heading text={title} />
      <Description text={description} />

      <div className="flex sm:flex-row flex-col gap-y-5 gap-x-5 w-full justify-center">
        {posts.map(({ image, title, description }, index) => (
          <Info
            key={index}
            image={image}
            heading={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionThree;

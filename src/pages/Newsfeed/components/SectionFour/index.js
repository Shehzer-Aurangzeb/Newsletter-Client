import React from "react";
import Heading from "../../../../components/Heading";
import Description from "../../../../components/Description";
import Info from "../../../../components/InfoCard";

function SectionFour({ title, description, posts }) {
  return (
    <div className="bg-light md:p-[37px] p-8 flex flex-col gap-y-5">
      <Heading text={title} />
      <Description text={description} />
      <div className="flex sm:flex-row flex-col gap-y-5 gap-x-5 md:justify-between w-full">
        {posts.map(({ title, image, description, readMoreLink }, index) => (
          <Info
            key={index}
            icon={image}
            heading={title}
            description={description}
            link={readMoreLink}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionFour;

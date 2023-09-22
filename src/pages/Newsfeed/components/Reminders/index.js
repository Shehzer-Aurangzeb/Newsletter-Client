import React from "react";
import Heading from "../../../../components/Heading";
import Description from "../../../../components/Description";
import Info from "../../../../components/InfoCard";
import { benefits, evaluation, privacy } from "../../../../constants/assets";

function Reminders() {
  return (
    <div className="bg-light md:p-[37px] p-8 flex flex-col gap-y-5">
      <Heading text={"Reminders"} />
      <Description
        text={
          "A small river named Duden flows by their place and supplies it with the necessary regelialia."
        }
      />
      <div className="flex sm:flex-row flex-col gap-y-5 gap-x-5 md:justify-between w-full">
        <Info
          icon={benefits}
          heading={"Health Care Benefits"}
          description={
            "Far far away, behind the word mountains, far from the countries"
          }
        />
        <Info
          icon={evaluation}
          heading={"Employee Evaluations"}
          description={
            "Far far away, behind the word mountains, far from the countries"
          }
        />
        <Info
          icon={privacy}
          heading={"Data Privacy"}
          description={
            "Far far away, behind the word mountains, far from the countries"
          }
        />
      </div>
    </div>
  );
}

export default Reminders;

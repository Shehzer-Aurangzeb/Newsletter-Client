import React from "react";
import Input from "../../../../../components/Input";

function Figures({ className, onChange, name, value, error }) {
  return (
    <div className={["flex flex-col gap-y-3 w-full", className].join(" ")}>
      <div className="flex md:flex-row flex-col gap-y-3 w-full gap-x-5">
        <Input
          label="Field Name"
          placeholder="Field Name"
          name={`${name}.field`}
          onChange={onChange}
          value={value.field}
          className="w-full max-w-[400px]"
        />
        <Input
          label="Figure"
          type="number"
          placeholder="Figure"
          name={`${name}.figure`}
          error={error}
          onChange={onChange}
          value={value.figure}
          className="w-full max-w-[400px]"
        />
      </div>
    </div>
  );
}

export default Figures;

import React from "react";
import Input from "../../../../../components/Input";

function QAndA({ className, onChange, name, value, error }) {
  return (
    <div className={["flex flex-col gap-y-3 w-full", className].join(" ")}>
      <div className="flex md:flex-row flex-col gap-y-3 w-full gap-x-5">
        <Input
          label="Question"
          placeholder="Question"
          name={`${name}.question`}
          onChange={onChange}
          value={value.question}
          className="w-full max-w-[400px]"
        />
        <Input
          label="Answer"
          placeholder="Answer"
          name={`${name}.answer`}
          error={error}
          onChange={onChange}
          value={value.answer}
          className="w-full max-w-[400px]"
        />
      </div>
    </div>
  );
}

export default QAndA;

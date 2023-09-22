import React from "react";
import Input from "../../../../../components/Input";

function Posts({
  className,
  onChange,
  name,
  value,
  error,
  handleFileChange,
  readMoreField,
}) {
  return (
    <div className={["flex flex-col gap-y-3 w-full", className].join(" ")}>
      <div className="flex md:flex-row flex-col gap-y-3 w-full gap-x-5 flex-wrap">
        <Input
          label="Post's Image"
          type="file"
          placeholder="Post Image"
          name={`${name}.image`}
          file={value.image}
          onChange={handleFileChange}
          className="w-full max-w-[400px]"
        />
        <Input
          label="Post's Title"
          placeholder="Title"
          name={`${name}.title`}
          onChange={onChange}
          error={error.title}
          value={value.title}
          className="w-full max-w-[400px]"
        />
        {readMoreField && (
          <Input
            label="Post's Read More Link"
            placeholder="Link"
            name={`${name}.readMoreLink`}
            onChange={onChange}
            error={error.readMoreLink}
            value={value.readMoreLink}
            className="w-full max-w-[400px]"
          />
        )}
      </div>
      <Input
        label="Post's Description"
        textArea={true}
        placeholder="Description"
        name={`${name}.description`}
        onChange={onChange}
        value={value.description}
        error={error.description}
        className="w-full"
      />
    </div>
  );
}

export default Posts;

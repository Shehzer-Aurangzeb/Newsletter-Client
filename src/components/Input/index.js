import React from "react";
import FileInput from "./file-input";

function Input({
  label,
  placeholder,
  onChange,
  error,
  type,
  style,
  className,
  value,
  name,
  readOnly,
  file,
  textArea,
}) {
  return (
    <div
      className={["flex flex-col gap-y-3 relative", className].join(" ")}
      style={style}
    >
      <label
        className="text-base font-bold font-sans text-black"
        htmlFor={name}
      >
        {label}
      </label>
      {type === "file" ? (
        <FileInput name={name} handleChange={onChange} profile={file} />
      ) : textArea ? (
        <textarea
          autoComplete="off"
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          readOnly={readOnly}
          id={name}
          type={type || "text"}
          value={value}
          className="bg-light py-5 px-7 text-black font-nunito font-normal text-xl placeholder:font-normal placeholder:font-nuntio placeholder:text-xl transition duration-300 focus:outline-none border border-solid border-transparent focus:border-black resize-none min-h-[150px] overflow-y-auto"
        />
      ) : (
        <input
          autoComplete="off"
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          readOnly={readOnly}
          id={name}
          type={type || "text"}
          value={value}
          className="bg-light py-5 px-7 text-black font-nunito font-normal text-xl placeholder:font-normal placeholder:font-nuntio placeholder:text-xl transition duration-300 focus:outline-none border border-solid border-transparent focus:border-black"
        />
      )}

      {error && <p className="font-sans text-sm text-error -mt-2">{error}</p>}
    </div>
  );
}

export default Input;

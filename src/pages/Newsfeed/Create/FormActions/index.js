import React from "react";

function FormActions({ handleAddRemoveField, fieldName, field }) {
  return (
    <div className="w-full max-w-[450px] flex flex-row gap-x-5">
      <button
        className="border border-solid border-black px-2 py-1 transition duration-300 hover:bg-black hover:text-white"
        onClick={() => handleAddRemoveField(fieldName, "add", field)}
        type="button"
      >
        Add Field
      </button>
      <button
        className="border border-solid border-black px-2 py-1 transition duration-300 hover:bg-black hover:text-white"
        onClick={() => handleAddRemoveField(fieldName, "remove")}
        type="button"
      >
        Remove Field
      </button>
    </div>
  );
}

export default FormActions;

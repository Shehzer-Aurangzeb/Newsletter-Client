/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { uploadIcon } from "../../constants/assets";

function FileInput({ handleChange, profile, name }) {
  return (
    <div className="flex flex-row w-full max-w-[400px] items-center bg-light  gap-x-5 relative py-[9px] px-4">
      {profile.length === 0 ? (
        <span className="block w-[50px] h-[50px] bg-[#a4a4a4]" />
      ) : (
        <img
          src={profile}
          alt="profile"
          className="w-[50px] h-[50px] object-cover"
        />
      )}

      <img src={uploadIcon} alt="upload-icon" className="w-[36px] h-[36px]" />
      <p className="text-black text-xl dark:text-main font-sans font-normal">
        Upload Image
      </p>
      <input
        onChange={handleChange}
        name={name}
        type="file"
        accept=".jpg, .jpeg, .png"
        className="w-full h-full opacity-0 absolute z-1 cursor-pointer"
      />
    </div>
  );
}
export default FileInput;

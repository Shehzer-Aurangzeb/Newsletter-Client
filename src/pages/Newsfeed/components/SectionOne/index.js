import React from "react";
function SectionOne({ image, title, date, volume }) {
  return (
    <section className="w-full h-[400px] relative">
      <div
        className="absolute w-full h-full inset-0 z-[1] bg-no-repeat bg-cover bg-[#00000030]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      {(title || date || volume) && (
        <header className="bg-blue sm:px-5 px-3 pt-[10px] pb-[6px] font-nunito font-normal z-10 w-full md:max-w-[65%] max-w-[90%] absolute left-0 bottom-[70px]">
          <h1 className="text-blue text-base sm:text-lg md:text-xl">{title}</h1>
          <p className="text-white text-xs">
            {date} {volume && `/ Vol ${volume}`}
          </p>
        </header>
      )}
    </section>
  );
}

export default SectionOne;

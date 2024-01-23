import React from "react";

const NumberTitle = ({ number, title }) => {
  return (
    <div className="relative flex justify-start">
      <h1 className="text-9xl tracking-tighter text-titleNumber">
        {number}<span className="text-2xl">&#9632;</span>
      </h1>
      <span className="uppercase absolute bottom-8 left-32 font-bold text-2xl text-titleHistory">
        {title}
      </span>
    </div>
  );
};

export default NumberTitle;

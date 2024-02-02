import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";

const Advertisement = ({ id, title, description, img }) => {
  return (
    <div className="flex items-center border w-96 h-32 border-gray-300 rounded-2xl">
      <img className="object-cover h-full w-7/12" src={img} alt="" />
      <div className="flex flex-col justify-center items-center gap-2 px-4">
        <h2 className="text-text text-lg font-semibold self-start">{title}</h2>
        <p className="text-grey text-sm font-normal self-start">
          {description}
        </p>
        <div
          className="flex items-center justify-between w-8/12 gap-3
          "
        >
          <span className="font-semibold text-purple text-sm">Visit</span>
          <span>
            <FaEllipsisVertical className="rotate-90 font-semibold text-purple" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;

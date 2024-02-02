import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import classes from "./advertisement.module.css";

const Advertisement = ({ id, title, description, img }) => {
  return (
    <div className="flex items-center border w-96 h-32 border-gray-300 rounded-2xl tab:rounded-lg overflow-hidden">
      <img
        className="object-cover h-full w-7/12 desktop:w-10/12 tab:w-full"
        src={img}
        alt=""
      />
      <div className="flex flex-col justify-center items-center gap-2 desktop:gap-1 px-4 desktop:px-2 tab:px-1">
        <h2 className="text-text text-lg desktop:text-sm tab:text-xs font-semibold self-start">
          {title}
        </h2>
        <p className="text-grey text-sm desktop:text-xs font-normal self-start">
          {description}
        </p>
        <div
          className="flex items-center justify-between w-8/12 gap-3
          "
        >
          <span
            className={`font-semibold text-purple text-sm desktop:text-xs ${classes.visit}`}
          >
            Visit
          </span>
          <span>
            <FaEllipsisVertical className="rotate-90 font-semibold text-purple tab:text-sm" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;

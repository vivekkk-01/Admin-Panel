import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FaEllipsisVertical } from "react-icons/fa6";

const StoryPageDescription = ({ story }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <img src={"/man-2.jpg"} className="h-9 w-9 object-cover" alt="" />
        <span className="text-grey font-semibold text-xl">James Robert</span>
        <span className="text-secondary font-medium text-lg">
          Created on {story?.date}
        </span>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="text-dark text-lg font-semibold">Accessibility</span>
          <MdArrowDropDown className="text-grey" size={30} />
        </div>
        <FaEllipsisVertical className="rotate-90 text-purple" size={23} />
      </div>
    </div>
  );
};

export default StoryPageDescription;

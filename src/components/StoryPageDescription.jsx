import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FaEllipsisVertical } from "react-icons/fa6";

const StoryPageDescription = ({ story }) => {
  return (
    <div className="flex items-center justify-between w-full overflow-hidden">
      <div className="flex items-center gap-2 tab:gap-1 mobile:gap-1.5 overflow-hidden">
        <img
          src={"/man-2.jpg"}
          className="h-9 w-9 desktop:h-7 desktop:w-7 tab:h-5 tab:w-5 object-cover"
          alt=""
        />
        <span className="text-grey font-semibold text-xl desktop:text-lg tab:text-sm mobile:text-xs">
          James Robert
        </span>
        <span className="text-secondary font-medium text-lg desktop:text-sm tab:text-xs">
          Created on {story?.date}
        </span>
      </div>
      <div className="flex items-center gap-5 tab:gap-2.5 mobile:hidden">
        <div className="flex items-center gap-2 tab:gap-1">
          <span className="text-dark text-lg desktop:text-sm tab:text-xs font-semibold">
            Accessibility
          </span>
          <MdArrowDropDown className="text-grey" size={30} />
        </div>
        <FaEllipsisVertical className="rotate-90 text-purple" size={23} />
      </div>
    </div>
  );
};

export default StoryPageDescription;

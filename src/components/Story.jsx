import React from "react";
import { FaEye } from "react-icons/fa";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { FaEllipsisVertical } from "react-icons/fa6";
import Link from "next/link";
import classes from "./story.module.css";

const Story = ({ id, title, storyImage, category, date, status }) => {
  return (
    <div
      className={`${classes.story} relative h-80 desktop:h-52 rounded-lg overflow-hidden`}
    >
      <img src={storyImage} className="h-full w-full object-cover" />
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-40"></div>
      <div className="absolute right-2 top-2 flex items-center gap-2">
        <span className="flex items-center gap-2 p-1 px-2 bg-white rounded-md text-primary">
          <FaEye className="desktop:text-xs" />
          <span className={`text-xs font-semibold ${classes.viewers}`}>
            428
          </span>
        </span>
        <span className="p-1 px-2 bg-white rounded-md text-primary">
          <MdOutlineInsertChartOutlined className="desktop:text-xs" />
        </span>
      </div>
      <div className="absolute bottom-2 flex flex-col gap-2 items-center justify-center mx-3">
        <h2 className="text-white font-semibold desktop:text-xs desktop:font-normal">
          {title}
        </h2>
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-1 desktop:gap-0.5">
            <span
              className={`font-bold desktop:font-semibold text-white ${classes.category}`}
            >
              {category}
            </span>
            <div className="w-1 h-1 bg-white rounded-full desktop:hidden"></div>
          </div>
          <span
            className={`font-semibold desktop:font-medium text-grey ${classes.date}`}
          >
            {date}
          </span>
          <span
            className={`${
              status === "Draft"
                ? "bg-viewBg text-grey"
                : status === "Published"
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            } py-3 px-3 desktop:p-2 desktop:py-1 rounded-lg ${classes.status}`}
          >
            {status}
          </span>
        </div>
        <div className="flex items-start w-11/12 gap-2">
          <Link
            href={`/${id}`}
            className="desktop:text-xs flex-1 rounded-lg text-center p-2 desktop:p-1 bg-viewBg text-purple cursor-pointer hover:text-viewBg hover:bg-purple"
          >
            View
          </Link>
          <span className="rounded-lg text-center p-2 desktop:p-1 bg-viewBg">
            <FaEllipsisVertical className="rotate-90 text-purple text-xl desktop:text-lg" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Story;

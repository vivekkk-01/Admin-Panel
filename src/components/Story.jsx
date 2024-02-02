import React from "react";
import { FaEye } from "react-icons/fa";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { FaEllipsisVertical } from "react-icons/fa6";
import Link from "next/link";

const Story = ({ id, title, storyImage, category, date, status }) => {
  return (
    <div
      className="relative h-80 rounded-lg overflow-hidden"
      style={{ width: "470px" }}
    >
      <img src={storyImage} className="h-full w-full object-cover" />
      <div className="absolute left-0 top-0 h-full w-full bg-black opacity-40"></div>
      <div className="absolute right-2 top-2 flex items-center gap-2">
        <span className="flex items-center gap-2 p-1 px-2 bg-white rounded-md text-primary">
          <FaEye />
          <span className="text-xs font-semibold">428</span>
        </span>
        <span className="p-1 px-2 bg-white rounded-md text-primary">
          <MdOutlineInsertChartOutlined />
        </span>
      </div>
      <div className="absolute bottom-2 flex flex-col gap-2 items-center justify-center mx-3">
        <h2 className="text-white font-semibold">{title}</h2>
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-1">
            <span className="font-bold text-white" style={{ fontSize: "10px" }}>
              {category}
            </span>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
          <span
            className="font-semibold text-grey"
            style={{ fontSize: "10px" }}
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
            } py-3 px-3 rounded-lg`}
            style={{ fontSize: "10px" }}
          >
            {status}
          </span>
        </div>
        <div className="flex items-start w-11/12 gap-2">
          <Link
            href={`/${id}`}
            className="flex-1 rounded-lg text-center py-2 bg-viewBg text-purple cursor-pointer hover:text-viewBg hover:bg-purple"
          >
            View
          </Link>
          <span className="rounded-lg text-center p-2 bg-viewBg">
            <FaEllipsisVertical className="rotate-90 text-purple" size={23} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Story;

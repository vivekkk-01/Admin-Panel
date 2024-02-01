"use client";
import React from "react";

const MainHeader = ({ category }) => {
  return (
    <div className="flex items-center justify-between w-11/12 ">
      <h3 className="text-dark font-semibold text-xl">{category}</h3>
      <span className="text-primary text-sm hover:opacity-60 cursor-pointer">
        See all
      </span>
    </div>
  );
};

export default MainHeader;

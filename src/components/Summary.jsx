"use client";

import React from "react";
import { FaBuysellads } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import { FaThList } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";

const items = [
  { icon: HiDocumentText, heading: "Articles", updates: "4,950" },
  { icon: FaThList, heading: "Categories", updates: "10,275" },
  { icon: GiBookCover, heading: "Stories", updates: "4,193" },
  { icon: FaBuysellads, heading: "Advertisements", updates: 928 },
];

const Summary = () => {
  return (
    <div className="w-11/12 tab:w-full">
      <ul className="flex items-center justify-around">
        {items.map((item) => (
          <li
            key={item.heading}
            className="flex items-center gap-5 desktop:gap-2"
          >
            {item.icon && (
              <item.icon className="text-purple text-4xl desktop:text-2xl tab:text-xl" />
            )}
            <div className="flex flex-col gap-2 desktop:gap-0.5">
              <h3 className="font-semibold text-2xl desktop:text-lg tab:text-sm">
                {item.heading}
              </h3>
              <span
                className="text-sm desktop:text-xs
               font-normal"
              >
                {item.updates} New Updates
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;

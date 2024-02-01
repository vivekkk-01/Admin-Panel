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
    <div className="w-11/12">
      <ul className="flex items-center justify-around">
        {items.map((item) => (
          <li key={item.heading} className="flex items-center gap-5">
            {item.icon && <item.icon size={35} className="text-purple" />}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-2xl">{item.heading}</h3>
              <span className="text-sm font-normal">{item.updates} New Updates</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;

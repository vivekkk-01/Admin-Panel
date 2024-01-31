"use client";

import React from "react";
import { TfiWrite } from "react-icons/tfi";
import { PiUsersBold } from "react-icons/pi";
import { LuUserSquare2 } from "react-icons/lu";
import { MdOutlineDevices } from "react-icons/md";
import { RiBarChartBoxLine } from "react-icons/ri";
import { GoFileMedia } from "react-icons/go";
import { IoNotificationsOutline, IoHomeOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import classes from "./sidebar.module.css";

const menuItems = [
  { icon: IoHomeOutline, heading: "Dashboard" },
  { icon: TfiWrite, heading: "Content" },
  { icon: PiUsersBold, heading: "Team" },
  { icon: LuUserSquare2, heading: "User" },
  { icon: MdOutlineDevices, heading: "App/Web" },
  { icon: RiBarChartBoxLine, heading: "Analytics", number: 3 },
  { icon: GoFileMedia, heading: "Media", number: 10 },
  { icon: IoNotificationsOutline, heading: "Notification" },
  { icon: CiSettings, heading: "Settings" },
];

const Sidebar = () => {
  return (
    <aside className="w-72 h-full flex flex-col items-center justify-between pt-10">
      <ul className="flex flex-col gap-1">
        {menuItems.map((item) => (
          <li
            className={`cursor-pointer w-52 p-4 flex items-center gap-4 rounded-xl ${
              item.heading === "Content" && classes.active
            } ${classes.listItem}`}
            key={item.heading}
          >
            {<item.icon size={20} />}
            <span>{item.heading}</span>
            {item.number && <span className="text-red-400">{item.number}</span>}
          </li>
        ))}
      </ul>
      <span
        className={`cursor-pointer w-52 p-4 flex items-center gap-4 rounded-xl ${classes.listItem} mb-10`}
      >
        <TfiHeadphoneAlt size={20} />
        Contact Support
      </span>
    </aside>
  );
};

export default Sidebar;

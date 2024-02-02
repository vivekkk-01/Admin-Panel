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
    <aside className="w-72 desktop:w-40 h-full flex flex-col items-center justify-between pt-10 overflow-hidden sticky left-0 top-0">
      <ul className="flex flex-col gap-1  overflow-hidden">
        {menuItems.map((item) => (
          <li
            className={`cursor-pointer w-52 desktop:w-32 p-4 desktop:p-2 flex items-center gap-4 desktop:gap-2 rounded-xl overflow-hidden ${
              item.heading === "Content" && classes.active
            } ${classes.listItem}`}
            key={item.heading}
          >
            {<item.icon size={20} />}
            <span className="desktop:text-sm">{item.heading}</span>
            {item.number && <span className="text-red-400">{item.number}</span>}
          </li>
        ))}
      </ul>
      <span
        className={`cursor-pointer w-52 desktop:w-32 p-4 desktop:p-2 flex items-center gap-4 desktop:gap-2 rounded-xl ${classes.listItem} mb-10  overflow-hidden`}
      >
        <TfiHeadphoneAlt size={20} />
        <span className="desktop:text-sm">Contact Support</span>
      </span>
    </aside>
  );
};

export default Sidebar;

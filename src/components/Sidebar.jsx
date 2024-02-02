"use client";

import React, { useEffect, useRef, useState } from "react";
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
import { RxHamburgerMenu } from "react-icons/rx";
import useClickOutside from "@/hooks/useClickOutside";

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
  const [isSizeLess, setIsSizeLess] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const sideBarRef = useRef();

  useClickOutside(sideBarRef, () => setShowSideBar(false));
  useEffect(() => {
    setIsSizeLess(window.innerWidth < 800);
    const handleResize = () => {
      setIsSizeLess(window.innerWidth < 800);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isSizeLess && !showSideBar && (
        <div
          onClick={() => setShowSideBar(true)}
          className="fixed top-2 left-2 cursor-pointer"
          style={{ zIndex: 60 }}
        >
          <RxHamburgerMenu size={30} />
        </div>
      )}
      {(isSizeLess && showSideBar) || (!isSizeLess && !showSideBar) ? (
        <aside
          ref={sideBarRef}
          className="w-72 desktop:w-40 h-full flex flex-col items-center justify-between pt-10 overflow-hidden sticky left-0 top-0 tab:bg-white tab:fixed"
          style={{ zIndex: 64 }}
        >
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
                {item.number && (
                  <span className="text-red-400">{item.number}</span>
                )}
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
      ) : null}
      {isSizeLess && showSideBar && (
        <div
          className="bg-black opacity-50 h-full"
          style={{
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 62,
          }}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

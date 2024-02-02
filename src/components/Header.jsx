"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const Header = ({ storyPage }) => {
  const [isChange, setIsChange] = useState(false);
  return (
    <header className="w-full h-32 px-10 desktop:px-3 flex items-center justify-between sticky top-0 bg-white z-50">
      {storyPage && (
        <div className="flex items-center gap-2">
          <Link href="/">
            <IoIosArrowRoundBack size={40} />
          </Link>
          <span className="font-bold text-3xl">Stories</span>
        </div>
      )}
      {!storyPage && (
        <div className="relative">
          {!isChange && <CiSearch className="absolute top-3.5 left-3" />}
          <input
            type="text"
            className="outline-none border border-gray-300 rounded-2xl p-2 tab:hidden"
            onChange={({ target }) => {
              if (target.value.trim() === "") {
                setIsChange(false);
              } else {
                setIsChange(true);
              }
            }}
          />
        </div>
      )}
      <div
        className={`flex items-center gap-6 ${
          !storyPage &&
          "tab:w-full tab:gap-0 tab:justify-between mobile:flex-col-reverse mobile:items-center mobile:gap-2"
        }`}
      >
        {!storyPage && (
          <div className="flex items-center gap-4 desktop:gap-2 p-3 px-4 desktop:px-2 border border-gray-400 rounded-xl">
            <span className="flex items-center gap-2 desktop:gap-1">
              <span className="desktop:text-xs">11-10-2022</span>
              <FaCalendarAlt className="text-purple text-lg desktop:text-sm" />
            </span>
            <span className="desktop:text-sm">OR</span>
            <span className="flex items-center gap-2 desktop:gap-1">
              <span className="desktop:text-xs">11-10-2022</span>
              <FaCalendarAlt className="text-purple text-lg desktop:text-sm" />
            </span>
          </div>
        )}
        <div
          className={`flex items-center gap-16 desktop:gap-5 ${
            storyPage && "mobile:hidden"
          }`}
        >
          <div className="flex items-center gap-2 desktop:gap-1">
            <img
              className="desktop:w-7 desktop:h-7 object-cover"
              src="/user-profile.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center">
              <span className="text-xs">Welcome back</span>
              <span className="desktop:text-sm">Akshita Patel</span>
            </div>
          </div>
          <RiArrowDropDownLine className="text-xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;

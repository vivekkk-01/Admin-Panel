"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const Header = ({ storyPage }) => {
  return (
    <header className="w-full h-32 px-10 flex items-center justify-between sticky top-0 bg-white z-50">
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
          <CiSearch className="absolute top-3.5 left-3" />
          <input
            type="text"
            className="outline-none border border-gray-300 rounded-2xl p-2 px-8"
          />
        </div>
      )}
      <div className="flex items-center gap-6">
        {!storyPage && (
          <div className="flex items-center gap-4 p-3 px-4 border border-gray-400 rounded-xl">
            <span className="flex items-center gap-2">
              <span>11-10-2022</span>
              <FaCalendarAlt className="text-purple" size={13} />
            </span>
            <span>OR</span>
            <span className="flex items-center gap-2">
              <span>11-10-2022</span>
              <FaCalendarAlt className="text-purple" size={13} />
            </span>
          </div>
        )}
        <div className="flex items-center gap-16">
          <div className="flex items-center gap-2">
            <img src="/user-profile.jpg" alt="" />
            <div className="flex flex-col justify-center">
              <span className="text-xs">Welcome back</span>
              <span>Akshita Patel</span>
            </div>
          </div>
          <RiArrowDropDownLine size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;

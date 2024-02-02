"use client";
import { getStory } from "@/data";
import React, { useEffect, useState } from "react";
import classes from "./storyPage.module.css";
import Header from "@/components/Header";
import { MdArrowDropDown } from "react-icons/md";
import { FaEllipsisVertical } from "react-icons/fa6";

const StoryPage = ({ params }) => {
  const [story, setStory] = useState(null);
  const storyId = params.slug;

  useEffect(() => {
    const story = getStory(storyId);
    setStory(story);
  }, [storyId]);

  return (
    <div className={`h-full ${classes.story_page}`}>
      <Header storyPage={true} />
      <div className="flex flex-col w-full gap-10 overflow-hidden my-5 px-12">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <img src={"/man-2.jpg"} className="h-9 w-9 object-cover" alt="" />
            <span className="text-grey font-semibold text-xl">
              James Robert
            </span>
            <span className="text-secondary font-medium text-lg">
              Created on {story?.date}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="text-dark text-lg font-semibold">
                Accessibility
              </span>
              <MdArrowDropDown className="text-grey" size={30} />
            </div>
            <FaEllipsisVertical className="rotate-90 text-purple" size={23} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;

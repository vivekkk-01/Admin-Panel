"use client";
import { getStory } from "@/data";
import React, { useEffect, useState } from "react";
import classes from "./storyPage.module.css";
import Header from "@/components/Header";
import StoryPageDescription from "@/components/StoryPageDescription";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const StoryPage = ({ params }) => {
  const [story, setStory] = useState(null);
  const storyId = params.slug;

  useEffect(() => {
    const story = getStory(storyId);
    setStory(story);
  }, [storyId]);

  const onLeftClick = () => {
    console.log("Clicked left!");
  };

  const onRightClick = () => {
    console.log("Clicked right!");
  };

  return (
    <div className={`h-full ${classes.story_page}`}>
      <Header storyPage={true} />
      <div className="flex flex-col w-full gap-4 overflow-hidden my-5 px-12">
        <StoryPageDescription story={story} />
        <div className={`w-full relative ${classes.story_img_container}`}>
          <img className="w-full h-full object-cover" src={story?.storyImage} />
          <div className="absolute left-0 top-0 h-full w-full bg-white opacity-20"></div>
          <div
            onClick={onLeftClick}
            className={`p-3 bg-black rounded-lg opacity-60 cursor-pointer ${classes.left_arrow}`}
          >
            <FaChevronLeft size={30} color="white" />
          </div>
          <div className={`absolute top-0 h-full z-40 ${classes.story_img}`}>
            <img src={story?.storyImage} className="h-full" alt="" />
          </div>
          <div
            onClick={onRightClick}
            className={`p-3 bg-black rounded-lg opacity-60 cursor-pointer ${classes.right_arrow}`}
          >
            <FaChevronRight size={30} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;

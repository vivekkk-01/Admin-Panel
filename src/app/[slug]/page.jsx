"use client";
import { findId, getStory } from "@/data";
import React, { useEffect, useState } from "react";
import classes from "./storyPage.module.css";
import Header from "@/components/Header";
import StoryPageDescription from "@/components/StoryPageDescription";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const StoryPage = ({ params }) => {
  const [story, setStory] = useState(null);
  const storyId = params.slug;
  const router = useRouter();

  useEffect(() => {
    const story = getStory(storyId);
    setStory(story);
  }, [storyId]);

  const onLeftClick = () => {
    const resultedId = findId({ storyId, direction: "left" });
    router.push(`/${resultedId}`);
  };

  const onRightClick = () => {
    const resultedId = findId({ storyId, direction: "right" });
    router.push(`/${resultedId}`);
  };

  return (
    <div className={`h-full overflow-x-hidden ${classes.story_page}`}>
      <Header storyPage={true} />
      <div className="flex flex-col w-full gap-4 overflow-hidden my-5 px-12 desktop:px-6 mobile:px-3">
        <StoryPageDescription story={story} />
        <div className={`w-full relative ${classes.story_img_container}`}>
          <img className="w-full h-full object-cover" src={story?.storyImage} />
          <div className="absolute left-0 top-0 h-full w-full bg-white opacity-20"></div>

          <div
            className={`absolute top-0 mobile:w-10/12 h-full z-40 ${classes.story_img}`}
          >
            <img src={story?.storyImage} className="h-full" alt="Story Image" />
            <div className="absolute bottom-5 flex flex-col gap-2 items-start mx-3">
              <h1 className="text-white font-bold text-3xl desktop:text-2xl tab:text-xl mobile:text-lg">
                {story?.title}
              </h1>
              <span className="font-semibold py-2 px-4 bg-viewBg rounded-lg tab:rounded-md text-purple text-lg desktop:text-sm tab:text-xs">
                {story?.category}
              </span>
            </div>
          </div>
          <div
            onClick={onLeftClick}
            className={`p-3 bg-black rounded-lg opacity-60 cursor-pointer ${classes.left_arrow}`}
          >
            <FaChevronLeft size={30} color="white" />
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

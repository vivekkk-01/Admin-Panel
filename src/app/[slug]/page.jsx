"use client";
import { getStory } from "@/data";
import React, { useEffect, useState } from "react";
import classes from "./storyPage.module.css";
import Header from "@/components/Header";
import StoryPageDescription from "@/components/StoryPageDescription";

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
        <StoryPageDescription story={story} />
      </div>
    </div>
  );
};

export default StoryPage;

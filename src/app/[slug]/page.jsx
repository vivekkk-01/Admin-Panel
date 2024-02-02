"use client";
import { getStory } from "@/data";
import React, { useEffect, useState } from "react";
import classes from "./storyPage.module.css";
import Header from "@/components/Header";

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
    </div>
  );
};

export default StoryPage;

"use client";
import { getStory } from "@/data";
import React, { useEffect, useState } from "react";

const StoryPage = ({ params }) => {
  const [story, setStory] = useState(null);
  const storyId = params.slug;

  useEffect(() => {
    const story = getStory(storyId);
    setStory(story);
  }, [storyId]);

  return <div>StoryPage</div>;
};

export default StoryPage;

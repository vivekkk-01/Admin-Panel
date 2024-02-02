import React from "react";
import MainHeader from "./MainHeader";
import Story from "./Story";
import { stories } from "@/data";

const Stories = () => {
  return (
    <div className="flex flex-col gap-4 desktop:gap-2">
      <MainHeader category={"Top Stories"} />
      <div className="flex items-center gap-5 desktop:gap-3">
        {stories.map(({ id, title, storyImage, category, date, status }) => (
          <Story
            key={id}
            id={id}
            title={title}
            storyImage={storyImage}
            category={category}
            date={date}
            status={status}
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;

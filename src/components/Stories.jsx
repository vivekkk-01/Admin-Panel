import React from "react";
import MainHeader from "./MainHeader";
import Story from "./Story";

const stories = [
  {
    id: "story-1",
    title: "How 7 lines code turned into $36 Billion Empire",
    storyImage: "/story-img-1.jpg",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
  },
  {
    id: "story-2",
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    storyImage: "/story-img-2.png",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Created",
  },
  {
    id: "story-3",
    title: "Teknion wins Gold at 2022 International Design Awards",
    storyImage: "/story-img-3.jpg",
    category: "POLITICS",
    date: "20 Sep 2022",
    status: "Draft",
  },
  {
    id: "story-4",
    title: "How 7 lines code turned into $36 Billion Empire",
    storyImage: "/story-img-1.jpg",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
  },
  {
    id: "story-5",
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    storyImage: "/story-img-2.png",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Created",
  },
];

const Stories = () => {
  return (
    <div className="flex flex-col gap-4">
      <MainHeader category={"Top Stories"} />
      <div className="flex items-center gap-5">
        {stories.map(({ id, title, storyImage, category, date, status }) => (
          <Story
            key={id}
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

"use client";
import React from "react";
import MainHeader from "./MainHeader";
import Article from "./Article";

const articles = [
  {
    id: "article-1",
    title: "7 Rules of Effective Branding",
    articleImage: "/article-img-1.png",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Created",
    description: "Lorem ipsum dolor sit amet consectetur",
    tags: ["Branding", "Communication", "Branding"],
    user: {
      username: "Marie Doe",
      picture: "/man.png",
    },
  },
  {
    id: "article-2",
    title: "Research on Biodiversity and...",
    articleImage: "/article-img-2.jpg",
    category: "ECONOMY",
    date: "20 Sep 2022",
    status: "Published",
    description: "Lorem ipsum dolor sit amet consectetur",
    tags: ["World", "Population"],
    user: {
      username: "Marie Doe",
      picture: "/man.png",
    },
  },
  {
    id: "article-3",
    title: "Close and historical ties to...",
    articleImage: "/article-img-3.jpg",
    category: "POLITICS",
    date: "20 Sep 2022",
    status: "Published",
    description: "Lorem ipsum dolor sit amet consectetur",
    tags: ["Politics", "Defence"],
    user: {
      username: "Marie Doe",
      picture: "/man.png",
    },
  },
  {
    id: "article-4",
    title: "7 Rules of Effective Branding",
    articleImage: "/article-img-1.png",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Created",
    description: "Lorem ipsum dolor sit amet consectetur",
    tags: ["Branding", "Communication", "Branding"],
    user: {
      username: "Marie Doe",
      picture: "/man.png",
    },
  },
];

const Articles = () => {
  return (
    <div className="flex flex-col gap-4">
      <MainHeader category={"Top Articles"} />
      <div className="flex items-center gap-6">
        {articles.map(
          ({
            id,
            title,
            articleImage,
            category,
            date,
            status,
            description,
            tags,
            user,
          }) => (
            <Article
              key={id}
              title={title}
              articleImage={articleImage}
              category={category}
              date={date}
              status={status}
              description={description}
              tags={tags}
              user={user}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Articles;

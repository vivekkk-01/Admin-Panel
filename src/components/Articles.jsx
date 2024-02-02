"use client";
import React from "react";
import MainHeader from "./MainHeader";
import Article from "./Article";
import { articles } from "@/data";

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

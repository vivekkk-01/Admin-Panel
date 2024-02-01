"use client";
import Link from "next/link";
import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";

const articles = [
  {
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
      <div className="flex items-center justify-between w-11/12 ">
        <h3 className="text-dark font-semibold text-xl">Top Articles</h3>
        <span className="text-primary text-sm hover:opacity-60 cursor-pointer">
          See all
        </span>
      </div>
      <div className="flex items-center gap-6">
        {articles.map(
          ({
            title,
            articleImage,
            category,
            date,
            status,
            description,
            tags,
            user,
          }) => (
            <div className=" w-80 flex flex-col gap-2 py-2">
              <img
                className="w-full object-cover rounded-2xl"
                src={articleImage}
                alt=""
              />
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-primary font-extrabold text-sm">
                    {category}
                  </span>
                  <span className="text-grey font-bold text-xs">{date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    className=" w-7 object-cover"
                    src={user.picture}
                    alt=""
                  />
                  <span className="font-bold text-xs">{user.username}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-text text-sm font-bold">{title}</h3>
                <span
                  className={`p-2 text-xs ${
                    status === "Created"
                      ? "text-purple bg-createdBackground"
                      : "text-published bg-publishedBackground"
                  }`}
                >
                  {status}
                </span>
              </div>
              <p className="text-grey font-light text-sm">{description}</p>
              <div className="flex items-center gap-4">
                {tags.map((tag) => (
                  <span key={tag} className="text-grey font-semibold text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <span className="flex-1 rounded-2xl text-center py-3 bg-viewBg text-purple cursor-pointer hover:text-viewBg hover:bg-purple">
                  View
                </span>
                <FaEllipsisVertical className="rotate-90 text-purple" />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Articles;

import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import classes from "./article.module.css";

const Article = ({
  articleImage,
  category,
  date,
  user,
  title,
  status,
  description,
  tags,
}) => {
  return (
    <div className="w-80 desktop:w-72 tab:w-64 mobile:w-80 flex flex-col gap-2 py-2">
      <img
        className="w-full object-cover rounded-2xl"
        src={articleImage}
        alt="Article Image"
      />
      <div className="w-full mobile:w-80 flex items-center justify-between">
        <div className="flex items-center gap-1 desktop:gap-0.5 mobile:gap-1.5">
          <span
            className={`text-primary font-extrabold text-sm ${classes.category}`}
          >
            {category}
          </span>
          <span className={`text-grey font-bold text-xs ${classes.date}`}>
            {date}
          </span>
        </div>
        <div className="flex items-center gap-1 desktop:gap-0.5 mobile:gap-1.5">
          <img
            className={`w-7 object-cover ${classes.picture}`}
            src={user.picture}
            alt="User Picture"
          />
          <span className={`font-bold text-xs ${classes.username}`}>
            {user.username}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h3 className={`text-text text-sm font-bold ${classes.title}`}>
          {title}
        </h3>
        <span
          className={`p-2 tab:py-1 tab:px-1 mobile:p-2 text-xs ${
            status === "Created"
              ? "text-purple bg-createdBackground"
              : "text-published bg-publishedBackground"
          } ${classes.status}`}
        >
          {status}
        </span>
      </div>
      <p className={`text-grey font-light text-sm ${classes.description}`}>
        {description}
      </p>
      <div className="flex items-center gap-4 desktop:gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`text-grey font-semibold text-xs ${classes.tag}`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="w-full flex items-center justify-between gap-2">
        <span className="flex-1 rounded-2xl mobile:rounded-lg text-center py-2 bg-viewBg text-purple cursor-pointer hover:text-viewBg hover:bg-purple desktop:text-sm tab:text-xs mobile:text-lg">
          View
        </span>
        <FaEllipsisVertical className="rotate-90 text-purple tab:text-sm mobile:text-lg" />
      </div>
    </div>
  );
};

export default Article;

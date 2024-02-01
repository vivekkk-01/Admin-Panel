import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";

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
          <img className=" w-7 object-cover" src={user.picture} alt="" />
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
        <span className="flex-1 rounded-2xl text-center py-2 bg-viewBg text-purple cursor-pointer hover:text-viewBg hover:bg-purple">
          View
        </span>
        <FaEllipsisVertical className="rotate-90 text-purple" />
      </div>
    </div>
  );
};

export default Article;

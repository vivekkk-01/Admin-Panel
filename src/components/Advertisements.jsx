import React from "react";
import MainHeader from "./MainHeader";
import Advertisement from "./Advertisement";
import { advertisements } from "@/data";
import classes from "./advertisement.module.css";

const Advertisements = () => {
  return (
    <div className="flex flex-col gap-4">
      <MainHeader category={"Advertisement"} />
      <div
        className={`flex items-center mobile:grid mobile:grid-cols-3 gap-6 tab:gap-3 overflow-hidden mobile:overflow-x-auto ${classes.advertisements}`}
      >
        {advertisements.map(({ id, title, img, description }) => (
          <Advertisement
            key={id}
            id={id}
            title={title}
            img={img}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Advertisements;

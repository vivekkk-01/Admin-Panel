import React from "react";
import MainHeader from "./MainHeader";
import Advertisement from "./Advertisement";
import { advertisements } from "@/data";

const Advertisements = () => {
  return (
    <div className="flex flex-col gap-4">
      <MainHeader category={"Advertisement"} />
      <div className="flex items-center gap-6 tab:gap-3">
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

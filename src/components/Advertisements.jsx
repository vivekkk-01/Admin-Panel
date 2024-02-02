import React from "react";
import MainHeader from "./MainHeader";
import Advertisement from "./Advertisement";

const advertisements = [
  {
    id: "advertisement-1",
    img: "/advertisement-img-1.jpg",
    title: "Build your business",
    description:
      "Shopify has all the tools you need to start, sell, market, and manage",
  },
  {
    id: "advertisement-2",
    img: "/advertisement-img-2.jpg",
    title: "Libre",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "advertisement-3",
    img: "/advertisement-img-3.jpg",
    title: "KFC",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Advertisements = () => {
  return (
    <div className="flex flex-col gap-4">
      <MainHeader category={"Advertisement"} />
      <div className="flex items-center gap-6">
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

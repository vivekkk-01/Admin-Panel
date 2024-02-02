export const advertisements = [
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

export const articles = [
  {
    id: "article-1",
    title: "7 Rules of Effective Branding",
    articleImage: "/article-img-1.png",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Created",
    description: "Lorem ipsum dolor sit amet consectetur",
    tags: ["Branding", "Communication"],
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
    tags: ["Branding", "Communication"],
    user: {
      username: "Marie Doe",
      picture: "/man.png",
    },
  },
];

export const stories = [
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

export const getStory = (storyId) => {
  const story = stories.find((story) => story.id === storyId);
  if (!story) return "Not Found!";
  return story;
};

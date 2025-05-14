import portfolioItems from "../data/portfolioData";

const getBackgroundImages = () => {
  const images = [];
  portfolioItems.forEach((item) => {
    item.images.forEach((img) => {
      if (!images.includes(img)) {
        images.push(img);
      }
    });
  });
  return images;
};

export default getBackgroundImages;

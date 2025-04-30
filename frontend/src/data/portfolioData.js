// src/data/portfolioData.js
import portfolioImg1 from "../imgs/portfolio/p_img.jpg";
import portfolioImg2 from "../imgs/portfolio/p_img2.jpg";
import portfolioImg3 from "../imgs/portfolio/p_img3.jpg";

const portfolioItems = [
  {
    id: "1",
    title: "Projeto A",
    description: "Descrição do Projeto A",
    category: "Categoria 1",
    images: [portfolioImg1, portfolioImg2],
  },
  {
    id: "2",
    title: "Projeto B",
    description: "Descrição do Projeto B",
    category: "Categoria 1",
    images: [portfolioImg1, portfolioImg3],
  },
  {
    id: "3",
    title: "Projeto C",
    description: "Descrição do Projeto C",
    category: "Categoria 2",
    images: [portfolioImg2, portfolioImg3],
  },
  {
    id: "4",
    title: "Projeto D",
    description: "Descrição do Projeto D",
    category: "Categoria 2",
    images: [portfolioImg1],
  },
];

export default portfolioItems;

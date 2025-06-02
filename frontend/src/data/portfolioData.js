import imageMap from "./portfolioImages";

const portfolioItems = [
  {
    id: "1",
    title: "Projetos de Interior",
    description: "Infraestruturas elétricas interiores.",
    category: "Interiores",
    images: imageMap["Interiores"].map((img) => img.src),
  },
  {
    id: "2",
    title: "Projetos de Exterior",
    description: "Instalações elétricas em áreas exteriores.",
    category: "Exteriores",
    images: imageMap["Exteriores"].map((img) => img.src),
  },
  {
    id: "3",
    title: "Projetos de Energia Renováveis",
    description: "Infraestruturas de energia renovável.",
    category: "Energias Renováveis",
    images: imageMap["EnergiaRenovavel"].map((img) => img.src),
  },
  {
    id: "4",
    title: "Projetos de Deteção de Segurança",
    description: "Deteção de incêndios e de dioxido de carbono.",
    category: "Segurança",
    images: imageMap["DetecaoIncendio"].map((img) => img.src),
  },
  // {
  //   id: "6",
  //   title: "Projeto de Baixadas",
  //   description: "Rede de cabos e estrutura de baixada.",
  //   category: "Baixadas",
  //   images: imageMap["Baixadas"].map((img) => img.src),
  // },
  {
    id: "5",
    title: "Projetos de Telecomunicação e CCTV",
    description: "Soluções em telecomunicações/ited e soluções em CCTV.",
    category: "Telecomunicações",
    images: imageMap["Telecomunicacoes"].map((img) => img.src),
  },
];

export default portfolioItems;

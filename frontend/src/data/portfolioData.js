import imageMap from "./portfolioImages";

const portfolioItems = [
  {
    id: "1",
    title: "Projeto de Interior",
    description: "Projeto feito em ambiente interior.",
    category: "Interiores",
    images: imageMap["Interiores"].map((img) => img.src),
  },
  {
    id: "2",
    title: "Projeto de Exterior",
    description: "Instalações externas em grandes áreas.",
    category: "Exteriores",
    images: imageMap["Exteriores"].map((img) => img.src),
  },
  {
    id: "3",
    title: "Projeto de Energia Renovável",
    description: "Infraestruturas de energia renovável.",
    category: "Energia Renovável",
    images: imageMap["EnergiaRenovavel"].map((img) => img.src),
  },
  {
    id: "4",
    title: "Projeto de Deteção de Incêndio",
    description: "Sistema de combate e detecção de incêndios.",
    category: "Deteção de Incêndio",
    images: imageMap["DetecaoIncendio"].map((img) => img.src),
  },
  // {
  //   id: "5",
  //   title: "Projeto de Baixadas",
  //   description: "Rede de cabos e estrutura de baixada.",
  //   category: "Baixadas",
  //   images: imageMap["Baixadas"].map((img) => img.src),
  // },
  {
    id: "6",
    title: "Projeto de Telecomunicação",
    description: "Soluções em telecomunicações.",
    category: "Telecomunicações",
    images: imageMap["Telecomunicacoes"].map((img) => img.src),
  },
];

export default portfolioItems;

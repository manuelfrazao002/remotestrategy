const categories = {
  Interiores: import.meta.glob("../imgs/interiores/*.{jpg,jpeg,png}", {
    eager: true,
  }),
  Exteriores: import.meta.glob("../imgs/exteriores/*.{jpg,jpeg,png}", {
    eager: true,
  }),
  //   Baixadas: import.meta.glob("../imgs/Baixadas/*.{jpg,jpeg,png}", {
  //     eager: true,
  //   }),
  EnergiaRenovavel: import.meta.glob(
    "../imgs/energia_renovavel/*.{jpg,jpeg,png}",
    { eager: true }
  ),
  DetecaoIncendio: import.meta.glob(
    "../imgs/detecao_incendio/*.{jpg,jpeg,png}",
    { eager: true }
  ),
  Telecomunicacoes: import.meta.glob(
    "../imgs/telecomunicacoes/*.{jpg,jpeg,png}",
    { eager: true }
  ),
};

const imageMap = {};

for (const [category, files] of Object.entries(categories)) {
  imageMap[category] = Object.entries(files).map(([path, mod]) => ({
    name: path.split("/").pop(),
    src: mod.default,
  }));
}

export default imageMap;

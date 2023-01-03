let champs = [
  {
    name: "Lux",
    vida: 2000,
    ligacaoDaLuz: 200,
    barreiraPrismatica: 0,
    singularidadeLucente: 600,
    centelhaFinal: 800,
  },
  {
    name: "Zed",
    vida: 2500,
    shurikenLaminado: 300,
    sombraViva: 0,
    corteSombrio: 700,
    marcaFatal: 500,
  },
  {
    name: "Caitlyn",
    vida: 1900,
    pacificadoraDePiltover: 200,
    armadilhaMecanicaYordle: 300,
    redeCalibre: 500,
    asNaManga: 800,
  },
];

let comboCompletoLux =
  champs[0].ligacaoDaLuz +
  champs[0].singularidadeLucente +
  champs[0].centelhaFinal;

let vidaRestanteCaitlyn = champs[2].vida - comboCompletoLux;

let exibirVidaRestanteCaitlyn = `Lux combou fofo a Caitlyn causando ${comboCompletoLux}. Caitlyn ficou com ${vidaRestanteCaitlyn} de vida.`;

console.log(exibirVidaRestanteCaitlyn);

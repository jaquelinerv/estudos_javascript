let champs = [
  {
    name: "Lux",
    vida: 2000,
    q: {
      nome: "ligacaoDaLuz",
      dano: 200,
    },
    w: {
      nome: "barreiraPrismatica",
      dano: 0,
    },
    e: {
      nome: "singularidadeLucente",
      dano: 600,
    },
    r: {
      nome: "centelhaFinal",
      dano: 800,
    },
  },
  {
    name: "Zed",
    vida: 2500,
    q: {
      nome: "shurikenLaminado",
      dano: 300,
    },
    w: {
      nome: "sombraViva",
      dano: 0,
    },
    e: {
      nome: "corteSombrio",
      dano: 700,
    },
    r: {
      nome: "marcaFatal",
      dano: 500,
    },
  },
  {
    name: "Caitlyn",
    vida: 1600,
    q: {
      nome: "pacificadoraDePiltover",
      dano: 200,
    },
    w: {
      nome: "armadilhaMecanicaYordle",
      dano: 300,
    },
    e: {
      nome: "redeCalibre",
      dano: 500,
    },
    r: {
      nome: "asNaManga",
      dano: 800,
    },
  },
];

let comboCompletoLux = champs[0].q.dano + champs[0].e.dano + champs[0].r.dano;

let vidaRestanteCaitlyn = champs[2].vida - comboCompletoLux;

let campeaoMorreu =
  vidaRestanteCaitlyn == 0
    ? `Lux combou fofo a Caitlyn causando ${comboCompletoLux} de dano. Caitlyn ficou com ${vidaRestanteCaitlyn} de vida e MÓRREU`
    : `Lux combou fofo a Caitlyn causando ${comboCompletoLux}. Caitlyn ficou com ${vidaRestanteCaitlyn} de vida e ta VIVINHA da Silva`;

console.log(campeaoMorreu);

let MiltoniusAE = {
  name_campeao: "Zed",
  dano: 150,
  vida: 300,
  item: {
    nome: "Rei Destruído",
    dano: 50,
  },
};

let Lucidity = {
  name_campeao: "Lulu",
  dano: 330,
  vida: 250,
  item: {
    nome: "Capuz da Morte de Rabadon",
    dano: 300,
  },
};

function batalha() {
  dano = MiltoniusAE.dano + MiltoniusAE.item.dano;
  resultado = Lucidity.vida - dano;
  if (resultado <= 0) {
    return `Zed causou ${dano} de dano. Lulu tem somente ${Lucidity.vida} de vida e por isso morreu... F :'(`;
  } else {
    return `Zed causou ${dano} de dano. Lulu ficou com ${resultado} de vida.`;
  }
}

console.log(batalha());

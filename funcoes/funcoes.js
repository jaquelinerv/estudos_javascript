//forma 1

let champ1 = {
  name: "Lux",
  vida: 2000,
  dano: 200,
};
let champ2 = {
  name: "Caitlyn",
  vida: 1900,
  dano: 200,
};
let item1 = { nome: "Tormenta de Luden", dano: 80 };

let item2 = { nome: "Mata-Cráquens", dano: 65 };

function addItem() {
  champ1.item = item1;
  return champ1;
}

console.log(addItem());

// forma 2
let champ3 = {
  name: "Lux",
  vida: 2000,
  dano: 200,
};
let champ4 = {
  name: "Caitlyn",
  vida: 1900,
  dano: 200,
};
let item3 = { nome: "Tormenta de Luden", dano: 80 };

let item4 = { nome: "Mata-Cráquens", dano: 65 };

champ3.item = item3;
console.log(champ3);

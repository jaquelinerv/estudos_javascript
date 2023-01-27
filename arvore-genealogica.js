let arvoreGenealogica = {
  avos: {
    avo1: "Maria",
    sexo: "feminino",
    idade: 70,
    avo2: "José",
    sexo: "masculino",
    idade: 70,
    filhos: [
      {
        nome: "Poppy",
        idade: 54,
        sexo: "feminino",
        filhos: [
          {
            name: "Lux",
            idade: 27,
            sexo: "feminino",
            filiacao: "Poppy e Garen",
          },
        ],
      },
      {
        nome: "Seu Madruga",
        idade: 40,
        sexo: "masculino",
        filhos: [
          {
            name: "Chiquinha",
            idade: 10,
            sexo: "feminino",
            filiacao: "Seu Madruga e Mãe da Chiquinha",
          },
        ],
      },
      {
        nome: "Dona Florinda",
        idade: 47,
        sexo: "feminino",
        filhos: [
          {
            name: "Quico",
            idade: 13,
            sexo: "masculino",
            filiacao: "Dona Florinda e Pai do Quico",
          },
        ],
      },
      {
        nome: "Naruto",
        idade: 59,
        sexo: "masculino",
        filhos: [
          {
            name: "Himawari",
            idade: 30,
            sexo: "feminino",
            filiacao: "Naruto e Hinata",
          },
          {
            name: "Boruto",
            idade: 32,
            sexo: "masculino",
            filiacao: "Naruto e Hinata",
          },
          {
            name: "Kawaki",
            idade: 34,
            sexo: "masculino",
            filiacao: "Desconhecida - Adotado",
          },
        ],
      },
    ],
  },
};

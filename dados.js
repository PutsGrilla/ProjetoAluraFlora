let dados = [
    {
      titulo: "Ipê Amarelo",
      descricao: "Você já viu uma árvore toda amarela? O ipê amarelo é assim! Quando chega a primavera, ele fica coberto de flores lindas e brilhantes, como se estivesse usando um vestido dourado. É como se a natureza fizesse uma festa só para nós! As flores do ipê atraem muitos animais, como abelhas e borboletas, que adoram o seu néctar doce. E sabia que a madeira do ipê é muito forte e resistente? Por isso, ele é uma árvore muito especial e importante para o nosso país!",
      link: "https://pt.wikipedia.org/wiki/Ipê-amarelo-flor-de-algodão" // Mais informações
    },
    {
      titulo: "A Sumaúma",
      descricao: "A Sumaúma é uma árvore gigante da Amazônia! Ela é tão alta que parece tocar o céu! Suas raízes são enormes e ajudam a segurar a árvore firme no chão. A Sumaúma dá frutos grandes com uma espécie de algodão por dentro, que serve de casa para muitos animais. Ela é como uma mãe para a floresta, protegendo e alimentando muitos bichinhos!A Sumaúma é uma árvore gigante da Amazônia! Ela é tão alta que parece tocar o céu! Suas raízes são enormes e ajudam a segurar a árvore firme no chão. A Sumaúma dá frutos grandes com uma espécie de algodão por dentro, que serve de casa para muitos animais. Ela é como uma mãe para a floresta, protegendo e alimentando muitos bichinhos!A Sumaúma é uma árvore gigante da Amazônia! Ela é tão alta que parece tocar o céu! Suas raízes são enormes e ajudam a segurar a árvore firme no chão. A Sumaúma dá frutos grandes com uma espécie de algodão por dentro, que serve de casa para muitos animais. Ela é como uma mãe para a floresta, protegendo e alimentando muitos bichinhos!A Sumaúma é uma árvore gigante da Amazônia! Ela é tão alta que parece tocar o céu! Suas raízes são enormes e ajudam a segurar a árvore firme no chão. A Sumaúma dá frutos grandes com uma espécie de algodão por dentro, que serve de casa para muitos animais. Ela é como uma mãe para a floresta, protegendo e alimentando muitos bichinhos!A Sumaúma é uma árvore gigante da Amazônia! Ela é tão alta que parece tocar o céu! Suas raízes são enormes e ajudam a segurar a árvore firme no chão. A Sumaúma dá frutos grandes com uma espécie de algodão por dentro, que serve de casa para muitos animais. Ela é como uma mãe para a floresta, protegendo e alimentando muitos bichinhosA Sumaúma é uma árvore gigante da Amazônia! Ela é tão alta que parece tocar o céu! Suas raízes são enormes e ajudam a segurar a árvore firme no chão. A Sumaúma dá frutos grandes com uma espécie de algodão por dentro, que serve de casa para muitos animais. Ela é como uma mãe para a floresta, protegendo e alimentando muitos bichinhos!",
      link: "https://lpf.florestal.gov.br/pt-br/?option=com_madeirasbrasileiras&view=especieestudada&especieestudadaid=62" // Mais informações
    },
    {
      titulo: "A Paineira",
      descricao: "A Paineira é uma árvore muito especial! Ela é grandona e forte, com um tronco todo cheio de espinhos, mas é bem macia por dentro. Quando chega a primavera, a Paineira fica linda, cheia de flores rosinhas ou brancas. Depois dessas flores lindas, nascem frutos bem grandes com uma espécie de algodãozinho por dentro. As crianças adoram brincar com esse algodão, fazendo bolas e almofadas bem macias. A Paineira é como uma amiga gigante que gosta de abraçar todo mundo!",
      link: "https://pt.wikipedia.org/wiki/Paineira" // Mais informações
    }
  ];
  
  function pesquisar() {
    // ... (restante da função)
    // ...
    const a = document.createElement("a");
    a.href = dado.link;
    a.target = "_blank";
    a.textContent = dado.titulo;
    h2.appendChild(a);
    // ...
  }
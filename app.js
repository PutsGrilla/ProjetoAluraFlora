function pesquisar() {
    const termoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase().trim(); // Obtém o termo de pesquisa
    const termos = termoPesquisa.split(' '); // Divide o termo de pesquisa em palavras
    const resultados = document.getElementById('resultados-pesquisa');
    resultados.innerHTML = ''; // Limpa os resultados anteriores
  
    dados.forEach(dado => {
      const tituloNormalizado = normalizarTexto(dado.titulo);
      const descricaoNormalizada = normalizarTexto(dado.descricao);
  
      // Verifica se todos os termos da pesquisa estão presentes em qualquer lugar do título ou descrição
      if (termos.every(termo => {
        return tituloNormalizado.includes(termo) || descricaoNormalizada.includes(termo);
      })) {
        const divResultado = document.createElement('div');
        divResultado.classList.add('item-resultado');
  
        const h2 = document.createElement('h2');
        const a = document.createElement('a');
        a.href = dado.link;
        a.target = '_blank';
        a.textContent = dado.titulo;
        h2.appendChild(a);
  
        const p = document.createElement('p');
        p.textContent = dado.descricao;
  
        divResultado.appendChild(h2);
        divResultado.appendChild(p);
  
        resultados.appendChild(divResultado);
      }
    });
  }
  
  function normalizarTexto(texto) {
    // Remove acentos, caracteres especiais e stop words
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, ' ').trim();
  }
function pesquisarElementos() {
    // Obtém o valor do input de pesquisa
    const termoPesquisa = document.getElementById('filtro').value.toLowerCase();
    
    // Filtra os elementos que contêm o termo de pesquisa no nome ou na descrição
    const resultados = dados.itens.filter(item =>
      item.titulo.toLowerCase().includes(termoPesquisa)
    );
  
    // Atualiza a exibição dos resultados
    atualizarResultados(resultados);
  }
  
  function atualizarResultados(resultados) {
    const resultadosContainer = document.getElementById('garrafas');
  
    // Limpa o conteúdo anterior
    resultadosContainer.innerHTML = '';

    console.log(resultados)
  
    // Adiciona os resultados ao container
    for(let i = 0; i < resultados.length; i++){

        montaCard(
            i, 
            resultados[i].classe, 
            resultados[i].titulo, 
            resultados[i].tipo, 
            resultados[i].uva, 
            resultados[i].preco, 
            resultados[i].unidades, 
            resultados[i].imagem);
    };

  }
  
  // Adiciona um ouvinte de evento para o input de pesquisa
  document.getElementById('filtro').addEventListener('input', pesquisarElementos);
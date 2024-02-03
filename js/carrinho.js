function adicionarAoCarrinho(event) {
    // Obtendo o botão clicado
    const botaoClicado = event.target;
  
    // Obtendo o elemento pai (a div com a classe "card__garrafa")
    const cardGarrafa = botaoClicado.closest('.card__garrafa');
  
    // Obtendo o elemento h2 dentro da div
    const precoElemento = cardGarrafa.querySelector('h2');
  
    // Obtendo o texto do elemento h2
    const precoTexto = precoElemento.textContent;
  
    // Utilizando uma expressão regular mais flexível para extrair números
    const matches = precoTexto.match(/[\d.,]+/);
  
    // Obtendo o elemento p com a classe "total"
    const elementoTotal = document.querySelector('.total');

    // Obtendo o texto do elemento
    const valorTexto = elementoTotal.textContent;

    // Convertendo o texto para um número
    const valorNumerico = parseInt(valorTexto, 10);

    // Exibindo o valor no console (você pode fazer o que quiser com o valor neste ponto)
    console.log(valorNumerico);

    // Verificando se houve correspondência
    if (matches) {
      // Extraindo o primeiro valor correspondente e removendo caracteres não numéricos
      const valor = parseFloat(matches[0].replace(/[^\d.]/g, ''));

      //Soma valores
      elementoTotal.innerHTML = valorNumerico + valor;
  
      // Exibindo o valor no console (você pode fazer o que quiser com o valor neste ponto)
      console.log(valor);
    } else {
      console.error('Não foi possível extrair um valor numérico do texto.');
    }
  }

// Obtendo uma NodeList de todos os botões com a classe "botao_adicionar"
const botoes = document.querySelectorAll('.botao_adicionar');

// Adicionando um ouvinte de evento para o clique em cada botão
botoes.forEach(botao => {
  botao.addEventListener('click', adicionarAoCarrinho);
});


// Obtendo uma NodeList de todos os botões com a classe "botao_adicionar"
const botoes = document.querySelectorAll('.botao_adicionar');

// Adicionando um ouvinte de evento para o clique em cada botão
botoes.forEach(botao => {
    botao.addEventListener('click', adicionarAoCarrinho);
});


function adicionarAoCarrinho(event) {
    console.log("adicionarAoCarrinho")
    // Obtendo o botão clicado
    const botaoClicado = event.target;
  
    // Obtendo o elemento pai (a div com a classe "card__garrafa")
    const cardGarrafa = botaoClicado.closest('.card__garrafa');
    const precoElemento = cardGarrafa.querySelector('h2');
    const precoTexto = precoElemento.textContent;
    const matches = precoTexto.match(/[\d.,]+/);
  
    // Obtendo o elemento p com a classe "total"
    const elementoTotal = document.querySelector('.total');
    const valorTexto = elementoTotal.textContent;
    const valorNumerico = parseInt(valorTexto, 10);

    // Verificando se houve correspondência
    if (matches) {
      const valor = parseFloat(matches[0].replace(/[^\d.]/g, ''));
      elementoTotal.innerHTML = valorNumerico + valor;
  
    } else {
      console.error('Não foi possível extrair um valor numérico do texto.');
    }
}
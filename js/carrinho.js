// Obtendo uma referência para o contêiner estático que envolve os botões
const containerBotoes = document.getElementById('garrafas');

// Adicionando um ouvinte de evento ao contêiner
containerBotoes.addEventListener('click', function(event) {
    // Verificando se o clique ocorreu em um botão
    if (event.target.classList.contains('botao_adicionar')) {
      adicionarAoCarrinho(event); // Passando o objeto event como argumento
      console.log("Cliquei");
    }
    // Adicione outras verificações de classe se houver mais tipos de botões
  });

function adicionarAoCarrinho(event) {
    console.log("adicionarAoCarrinho")
    // Obtendo o botão clicado
    let botaoClicado = event.target;
  
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
let arrayObjetos = [{
    nome: 'Carlinhos',
    avatar: './img/carlinhos.jpeg',
    valorGasto: 260
},
{
    nome: 'Candida',
    avatar: './img/candida.jpeg',
    valorGasto: 280
},
{
    nome: 'Candice',
    avatar: './img/candice.jpeg',
    valorGasto: 340
},
{
    nome: 'Camille',
    avatar: './img/camille.png',
    valorGasto: 0
},
{
    nome: 'Juliano',
    avatar: './img/juliano.jpeg',
    valorGasto: 55
},
{
    nome: 'Kelly',
    avatar: './img/kelly.jpeg',
    valorGasto: 35
},
{
    nome: 'Lucas',
    avatar: './img/lucas.png',
    valorGasto: 0
}]

listaOrdenada = arrayObjetos.sort(function(b, a) {
    return a.valorGasto - b.valorGasto;
  });

for(i = 0; i < arrayObjetos.length; i++){

    montaRanking(
        i, 
        listaOrdenada[i].nome, 
        listaOrdenada[i].avatar, 
        listaOrdenada[i].valorGasto);

}

function montaRanking(i,nome, avatar, valorGasto) {
    //container
    let areaTop = document.getElementById('top');

    //cria div usuario
    let novoCard = document.createElement("div");
    novoCard.classList.add('top__usuario');
    areaTop.appendChild(novoCard);

    //insere imagem usuario
    let usuarioAvatar = document.createElement("img");
    usuarioAvatar.src = avatar;
    novoCard.appendChild(usuarioAvatar);

    //insere div do nome e barra de progresso
    let usuarioDados = document.createElement("div");
    usuarioDados.classList.add('usuario__info');
    novoCard.appendChild(usuarioDados);

    //insere nome usuário
    let nomeUsuario = document.createElement("h3");
    let nomeUsuarioTexto = document.createTextNode(`${nome}`);
    nomeUsuario.appendChild(nomeUsuarioTexto);
    usuarioDados.appendChild(nomeUsuario);

    //define percentual da barra
    let percent = parseInt((valorGasto * 100) / 1400);

    //define nome da classe
    let classeUsuario = (`${nome}_barraProgresso`).toLowerCase();

    //cria barra progresso limite
    let barraProgresso = document.createElement("div");
    barraProgresso.classList.add('container');
    usuarioDados.appendChild(barraProgresso);

    //cria barra progresso atual
    let barraProgressoValor = document.createElement("div");
    let barraProgressoValorTexto = document.createTextNode(`R$${valorGasto}`);
    barraProgressoValor.appendChild(barraProgressoValorTexto);
    barraProgressoValor.classList.add('skill');
    barraProgressoValor.classList.add(classeUsuario);
    barraProgresso.appendChild(barraProgressoValor);

    let classeUsuarioAtual = document.querySelector(`.${classeUsuario}`);

    if (classeUsuarioAtual) {
        classeUsuarioAtual.style.width = `${percent}%`;
    } else {
        console.error(`Nenhum elemento com a classe ${classeUsuario} encontrado.`);
    }
}
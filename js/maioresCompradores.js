let arrayObjetos = [{
    nome: 'Carlinhos',
    avatar: './img/carlinhos.jpeg',
    valorGasto: 140
},
{
    nome: 'Candice',
    avatar: './img/candice.jpeg',
    valorGasto: 100
},
{
    nome: 'Cândida',
    avatar: './img/candida.jpeg',
    valorGasto: 70
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

    let areaTop = document.getElementById('top');

    let novoCard = document.createElement("div");
    novoCard.classList.add('top__usuario');
    areaTop.appendChild(novoCard);

    let usuarioAvatar = document.createElement("img");
    usuarioAvatar.src = avatar;
    novoCard.appendChild(usuarioAvatar);

    let usuarioDados = document.createElement("div");
    usuarioDados.classList.add('usuario__info');
    novoCard.appendChild(usuarioDados);

    let nomeUsuario = document.createElement("h3");
    let nomeUsuarioTexto = document.createTextNode(`${nome}`);
    nomeUsuario.appendChild(nomeUsuarioTexto);
    usuarioDados.appendChild(nomeUsuario);

    let barraProgresso = document.createElement("progress");
    barraProgresso.min = 0;
    barraProgresso.max = 1400;
    barraProgresso.value = valorGasto;
    usuarioDados.appendChild(barraProgresso);
}
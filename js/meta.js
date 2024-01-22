let users = [{
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

let meta = {
    imagem: './img/fogao.jpeg',
    valor: 1400
}

let sum = 0;

function soma (array){
    for(let i = 0; i < array.length; i++){
        sum += array[i].valorGasto;
    return sum;
    }
};

 montaMeta(soma(users), meta.imagem, meta.valor)

 function montaMeta(valorTotal, imagem, metaValor) {
    let areaMeta = document.getElementById('meta');

    let divImagem = document.createElement("div");
    divImagem.classList.add('fogao__imagem');
    areaMeta.appendChild(divImagem);

    let metaImagem_foto = document.createElement("img");
    metaImagem_foto.src = imagem;
    divImagem.appendChild(metaImagem_foto);

    let barraProgresso = document.createElement("progress");
    barraProgresso.min = 0;
    barraProgresso.max = metaValor;
    barraProgresso.value = valorTotal;
    areaMeta.appendChild(barraProgresso);
 };

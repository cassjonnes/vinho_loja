// VENDAS
let vendas = [{
    nome: 'Juliano',
    data: 06/01/2024,
    compra: 'Casa Silva',
    quantidade: 1,
    valorCompra: 35,
    valorVenda: 55
},
{
    nome: 'Candida',
    data: 06/01/2024,
    compra: 'Garibaldi',
    quantidade: 1,
    valorCompra: 28,
    valorVenda: 35
},
{
    nome: 'Kelly',
    data: 07/01/2024,
    compra: 'Garibaldi',
    quantidade: 1,
    valorCompra: 28,
    valorVenda: 35
},
{
    nome: 'Candice',
    data: 19/01/2024,
    compra: 'Pack de heineken',
    quantidade: 1,
    valorCompra: 42,
    valorVenda: 50
},
{
    nome: 'Carlinhos',
    data: 19/01/2024,
    compra: 'Casa Silva',
    quantidade: 1,
    valorCompra: 35,
    valorVenda: 55
},
{
    nome: 'Carlinhos',
    data: 19/01/2024,
    compra: 'Trapiche',
    quantidade: 1,
    valorCompra: 45,
    valorVenda: 60
},
{
    nome: 'Carlinhos',
    data: 19/01/2024,
    compra: 'Tierruca',
    quantidade: 1,
    valorCompra: 30,
    valorVenda: 40
},
{
    nome: 'Candice',
    data: 20/01/2024,
    compra: 'Pack de heineken',
    quantidade: 1,
    valorCompra: 42,
    valorVenda: 50
},
{
    nome: 'Candida',
    data: 21/01/2024,
    compra: 'Garibaldi',
    quantidade: 1,
    valorCompra: 28,
    valorVenda: 35
},
{
    nome: 'Candida',
    data: 03/02/2024,
    compra: 'Pack de Corona',
    quantidade: 1,
    valorCompra: 40,
    valorVenda: 55
}]

// INFO USUARIOS
let arrayObjetos = [{
    nome: 'Carlinhos',
    avatar: './img/carlinhos.jpeg',
    valorGasto: 140
},
{
    nome: 'Candida',
    avatar: './img/candida.jpeg',
    valorGasto: 125
},
{
    nome: 'Candice',
    avatar: './img/candice.jpeg',
    valorGasto: 100
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

function mesclarArrays(vendas, arrayObjetos, nome) {
    return vendas.map(objeto1 => {
      const objeto2 = arrayObjetos.find(objeto2 => objeto2[nome] === objeto1[nome]);
  
      // Se encontrou um objeto correspondente, mescla os objetos
      if (objeto2) {
        return { ...objeto1, ...objeto2 };
      }
  
      // Se não encontrou correspondência, retorna o objeto original
      return objeto1;
    });
  }

const resultado = mesclarArrays(vendas, arrayObjetos, 'nome');

let listaOrdenada = resultado.sort(function(b, a) {
    return a.data - b.data;
  });

console.log(listaOrdenada)

montaCabecalhoRegistroVendas()

for(let i = 0; i < listaOrdenada.length; i++){
    montaRegistrosVendas(
        listaOrdenada[i].avatar,
        listaOrdenada[i].nome,
        listaOrdenada[i].data,
        listaOrdenada[i].compra,
        listaOrdenada[i].quantidade,
        listaOrdenada[i].valorCompra,
        listaOrdenada[i].valorVenda,
        listaOrdenada[i].avatar,
        listaOrdenada[i].valorVenda
    )
}

function montaCabecalhoRegistroVendas(){
    const areaVendas = document.querySelector('.vendas');

    let novaLinha = document.createElement("div");
    novaLinha.classList.add('linha');
    areaVendas.appendChild(novaLinha);

    let pessoa = document.createElement("h1");
    let textoNome = document.createTextNode('Nome');
    pessoa.classList.add('item');
    pessoa.appendChild(textoNome);
    novaLinha.appendChild(pessoa);

    let data = document.createElement("h1");
    let textoData = document.createTextNode('Data');
    data.classList.add('item');
    data.appendChild(textoData);
    novaLinha.appendChild(data);

    let item = document.createElement("h1");
    let textoItem = document.createTextNode('Item');
    item.classList.add('item');
    item.appendChild(textoItem);
    novaLinha.appendChild(item);

    let quantiade = document.createElement("h1");
    let textoQuantidade = document.createTextNode('Quantidade');
    quantiade.classList.add('item');
    quantiade.appendChild(textoQuantidade);
    novaLinha.appendChild(quantiade);

    let valorCompra = document.createElement("h1");
    let textoValorCompra = document.createTextNode('Valor Compra');
    valorCompra.classList.add('item');
    valorCompra.appendChild(textoValorCompra);
    novaLinha.appendChild(valorCompra);

    let valorVenda = document.createElement("h1");
    let textoValorVenda = document.createTextNode('Valor Venda');
    valorVenda.classList.add('item');
    valorVenda.appendChild(textoValorVenda);
    novaLinha.appendChild(valorVenda);
}

function montaRegistrosVendas(avatar, nome, data, compra, quantidade, valorCompra, valorVenda){

    const areaVendas = document.querySelector('.vendas');

    let novaLinha = document.createElement("div");
    novaLinha.classList.add('linha');
    areaVendas.appendChild(novaLinha);

    //insere imagem usuario
    let usuarioAvatar = document.createElement("img");
    usuarioAvatar.src = avatar;
    usuarioAvatar.classList.add('img');
    //usuarioAvatar.classList.add('item');
    novaLinha.appendChild(usuarioAvatar);

    let pessoa = document.createElement("h1");
    let textoNome = document.createTextNode(`${nome}`);
    pessoa.classList.add('item');
    pessoa.appendChild(textoNome);
    novaLinha.appendChild(pessoa);

    const valorNumerico = data;
    const valorEmMilissegundos = 1706923541921 // 86.400.000 milissegundos em um dia
    const dataC = new Date(1970, 0, 1); // Época
    
    // Adicionando o valor em milissegundos ao objeto Date
    dataC.setTime(dataC.getTime() + valorEmMilissegundos);
    
    const dataFormatada = formatarDataParaString(dataC);
    console.log(dataFormatada);

    let dataCompra = document.createElement("p");
    let textoData = document.createTextNode(`${dataFormatada}`);
    dataCompra.classList.add('item');
    dataCompra.appendChild(textoData);
    novaLinha.appendChild(dataCompra);

    let itemCompra = document.createElement("p");
    let textoCompra = document.createTextNode(`${compra}`);
    itemCompra.classList.add('item');
    itemCompra.appendChild(textoCompra);
    novaLinha.appendChild(itemCompra);

    let itemQuantidade = document.createElement("p");
    let textoQuantiade = document.createTextNode(`${quantidade}`);
    itemQuantidade.classList.add('item');
    itemQuantidade.appendChild(textoQuantiade);
    novaLinha.appendChild(itemQuantidade);

    let compraValor = document.createElement("p");
    let compraTexto = document.createTextNode(`R$${valorCompra}`);
    compraValor.classList.add('item');
    compraValor.appendChild(compraTexto);
    novaLinha.appendChild(compraValor);

    let vendaValor = document.createElement("p");
    let vendaTexto = document.createTextNode(`R$${valorVenda}`);
    vendaValor.classList.add('item');
    vendaValor.appendChild(vendaTexto);
    novaLinha.appendChild(vendaValor);

}

function formatarDataParaString(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Adicionando 1 ao mês
    const ano = data.getFullYear();
  
    return `${dia}/${mes}/${ano}`;
  }
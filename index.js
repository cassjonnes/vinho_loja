//const itens = require('./dados.js');

let itens = [{
    classe: 'vinho',
    titulo: 'Casa Silva',
    tipo: 'Tinto',
    uva: 'Cabernet Sauvignon',
    preco: 55,
    unidades: 6
}]

console.log(itens);

for(let i = 0; i < itens.length; i++){
    montaCard()
}

function montaCard (){
    let novoCard = document.createElement("div");
    novoCard.classList.add(`${card__garrafa}`);

    let garrafaImagem = document.createElement("div");
    garrafaImagem.classList.add(`${garrafa__imagem}`);
    novoCard.appendChild(garrafaImagem);

    //let nomeGarrafa = 

}



{/* <div class="card__garrafa">
    <div class="garrafa__imagem">
        <img src="./img/garibaldiVeroBrut.jpeg">
    </div>
    <h1>Garibaldi</h1>
    <div class="garrafas_tags">
        <p class="brut">Brut</p>
    </div>
    <h2><strong>R$ 35</strong></h2>
    <p class="unidade">9 unidades</p>
</div>  */}
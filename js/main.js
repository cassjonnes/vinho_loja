const dados = {
    "itens" : [
        {
            "classe": "vinho",
            "titulo": "Casa Silva",
            "tipo": "Tinto",
            "uva": "Cabernet Sauvignon",
            "preco": 55,
            "unidades": 6,
            "imagem": "./img/casaSilva.webp"
        },
        {
            "classe": "vinho",
            "titulo": "Casillero Del Diablo",
            "tipo": "Tinto",
            "uva": "Cabernet Sauvignon",
            "preco": 65,
            "unidades": 5,
            "imagem": "./img/casillero_cabernet_s.webp"
        },
        {
            "classe": "vinho",
            "titulo": "Granja União",
            "tipo": "Tinto",
            "uva": "Cabernet Sauvignon",
            "preco": 35,
            "unidades": 2,
            "imagem": "./img/granjaUniaoCabernet.jpeg"
        },
        {
            "classe": "vinho",
            "titulo": "Reservado",
            "tipo": "Tinto",
            "uva": "Cabernet Sauvignon",
            "preco": 45,
            "unidades": 8,
            "imagem": "./img/reservadoCabernetSauvignon.jpeg"
        },
        {
            "classe": "vinho",
            "titulo": "Trapiche",
            "tipo": "Tinto",
            "uva": "Cabernet Sauvignon",
            "preco": 60,
            "unidades": 3,
            "imagem": "./img/trapiche_cabernet_s.jpeg"
        },
        {
            "classe": "vinho",
            "titulo": "Tierruca",
            "tipo": "Branco",
            "uva": "Sauvignon Blanc",
            "preco": 40,
            "unidades": 0,
            "imagem": "./img/tierruca_blanc.webp"
        },
        {
            "classe": "espumante",
            "titulo": "Garibaldi",
            "tipo": "Brut",
            "uva": "",
            "preco": 35,
            "unidades": 7,
            "imagem": "./img/garibaldiVeroBrut.jpeg"
        },
        {
            "classe": "cerveja",
            "titulo": "Pack de Heineken",
            "tipo": "Cerveja",
            "uva": "",
            "preco": 50,
            "unidades": 0,
            "imagem": "./img/pack_heineken.webp"
        },
        {
            "classe": "cerveja",
            "titulo": "Pack de Corona",
            "tipo": "Cerveja",
            "uva": "",
            "preco": 55,
            "unidades": 3,
            "imagem": "./img/pack_corona.webp"
        },
        {
            "classe": "vinho",
            "titulo": "Chac Chac - Branco",
            "tipo": "Branco",
            "uva": "",
            "preco": 35,
            "unidades": 3,
            "imagem": "./img/chacchac_branco.jpeg"
        },
        {
            "classe": "vinho",
            "titulo": "Chac Chac - Rose",
            "tipo": "Rose",
            "uva": "",
            "preco": 35,
            "unidades": 2,
            "imagem": "./img/chacchac_rose.jpeg"
        }
    ]
    }


for(let i = 0; i < dados.itens.length; i++){

    montaCard(
        i, 
        dados.itens[i].classe, 
        dados.itens[i].titulo, 
        dados.itens[i].tipo, 
        dados.itens[i].uva, 
        dados.itens[i].preco, 
        dados.itens[i].unidades, 
        dados.itens[i].imagem);
};

function montaCard (i, classe, titulo, tipo, uva, preco, unidades, imagem){

    let areaCard = document.getElementById('garrafas');
    let novoCard = document.createElement("div");
    novoCard.classList.add('card__garrafa');
    areaCard.appendChild(novoCard);

    let garrafaImagem = document.createElement("div");
    garrafaImagem.classList.add('garrafa__imagem');
    novoCard.appendChild(garrafaImagem);

    let garrafaImagem_foto = document.createElement("img");
    garrafaImagem_foto.src = imagem;
    garrafaImagem.appendChild(garrafaImagem_foto);

    let nomeGarrafa = document.createElement("h1");
    let textoTituloGarrafa = document.createTextNode(`${titulo}`);
    nomeGarrafa.appendChild(textoTituloGarrafa);
    novoCard.appendChild(nomeGarrafa);

    let tags = document.createElement("div");
    tags.classList.add('garrafas_tags');
    novoCard.appendChild(tags);

    let tag = document.createElement("p");
    if(tipo === "Tinto"){
        tag.classList.add('tinto');
    } else if (tipo === "Branco"){
        tag.classList.add('sauvignon_blanc');
    } else if (tipo === "Brut"){
        tag.classList.add('brut');
    }else if (tipo === "Cerveja"){
        tag.classList.add('cerveja');
    }else if (tipo === "Rose"){
        tag.classList.add('rose');
    }
    let textoTagGarrafa = document.createTextNode(`${tipo}`);
    tag.appendChild(textoTagGarrafa);
    tags.appendChild(tag);

    let tagUva = document.createElement("p");
    let textoUvaGarrafa = document.createTextNode(`${uva}`);
    tagUva.appendChild(textoUvaGarrafa);
    tags.appendChild(tagUva);
    if(uva === "Cabernet Sauvignon"){
        tagUva.classList.add('cabert_sauvignon');
    } else if (uva === "Sauvignon Blanc"){
        tagUva.classList.add('sauvignon_blanc');
    }

    let precoGarrafa = document.createElement("h2");
    let textoPrecoGarrafa = document.createTextNode(`R$ ${preco}`);
    precoGarrafa.appendChild(textoPrecoGarrafa);
    precoGarrafa.classList.add('garrafa_preco');
    novoCard.appendChild(precoGarrafa);

    let unidade = document.createElement("p");
    let textoUnidadeGarrafa = document.createTextNode(`Restam ${unidades} unidades.`);
    unidade.classList.add('unidade')
    unidade.appendChild(textoUnidadeGarrafa);
    novoCard.appendChild(unidade);

    let botaoAdicionar = document.createElement("button");
    botaoAdicionar.classList.add('botao_adicionar')
    let textoBotao = document.createTextNode('Adicionar');
    botaoAdicionar.appendChild(textoBotao);
    novoCard.appendChild(botaoAdicionar);
    };
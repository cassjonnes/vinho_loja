const dados = {
    "itens" : [
        {
            "classe": "vinho",
            "titulo": "Casa Silva",
            "tipo": "Tinto",
            "uva": "Cabernet Sauvignon",
            "preco": 55,
            "unidades": 17,
            "imagem": "./img/casaSilva.webp"
        },
        {
            "classe": "vinho",
            "titulo": "Casillero Del Diablo",
            "tipo": "Tinto",
            "uva": "Cabernet Sauvignon",
            "preco": 65,
            "unidades": 4,
            "imagem": "./img/casillero_cabernet_s.webp"
        },
        {
            "classe": "vinho",
            "titulo": "Miolo Seleção",
            "tipo": "Rose",
            "uva": "Cabernet Sauvignon",
            "preco": 40,
            "unidades": 4,
            "imagem": "./img/miolo-selecao-rose.jpeg"
        },
        {
            "classe": "vinho",
            "titulo": "Miolo Seleção",
            "tipo": "Branco",
            "uva": "Pinot G & Riesling",
            "preco": 40,
            "unidades": 2,
            "imagem": "./img/miolo_selecao_pinot_branco.webp"
        },
        {
            "classe": "vinho",
            "titulo": "Reservado",
            "tipo": "Rose",
            "uva": "",
            "preco": 45,
            "unidades": 2,
            "imagem": "./img/reservado_rose.webp"
        },
        {
            "classe": "vinho",
            "titulo": "Reservado",
            "tipo": "Branco",
            "uva": "Sauvignon Blanc",
            "preco": 45,
            "unidades": 2,
            "imagem": "./img/Reservado-Sauv-Blanc.jpeg"
        },
        {
            "classe": "vinho",
            "titulo": "Granja União",
            "tipo": "Tinto",
            "uva": "Cabernet Sauvignon",
            "preco": 35,
            "unidades": 16,
            "imagem": "./img/granjaUniaoCabernet.jpeg"
        },
        {
            "classe": "vinho",
            "titulo": "Reservado",
            "tipo": "Tinto",
            "uva": "Cabernet Sauvignon",
            "preco": 45,
            "unidades": 13,
            "imagem": "./img/reservadoCabernetSauvignon.jpeg"
        },
        {
            "classe": "vinho",
            "titulo": "Trapiche",
            "tipo": "Tinto",
            "uva": "Cabernet Sauvignon",
            "preco": 45,
            "unidades": 3,
            "imagem": "./img/trapiche_cabernet_s.jpeg"
        },
        {
            "classe": "vinho",
            "titulo": "Tierruca",
            "tipo": "Branco",
            "uva": "Sauvignon Blanc",
            "preco": 40,
            "unidades": 3,
            "imagem": "./img/tierruca_blanc.webp"
        },
                {
            "classe": "vinho",
            "titulo": "Tierruca - Reserva",
            "tipo": "Branco",
            "uva": "Sauvignon Blanc",
            "preco": 45,
            "unidades": 4,
            "imagem": "./img/tierruca-reserva-salvignon-blanc.webp"
        },
        {
            "classe": "vinho",
            "titulo": "Piel de Lobo",
            "tipo": "Tinto",
            "uva": "Malbec",
            "preco": 50,
            "unidades": 5,
            "imagem": "./img/piel_de_lobo.png"
        },
        {
            "classe": "vinho",
            "titulo": "Piel de Lobo",
            "tipo": "Tinto",
            "uva": "Cabernet Sauvignon",
            "preco": 50,
            "unidades": 2,
            "imagem": "./img/piel-de-lobo-cabernet-sauvignon.png"
        },
        {
            "classe": "cerveja",
            "titulo": "Pack de Heineken",
            "tipo": "Cerveja",
            "uva": "",
            "preco": 50,
            "unidades": 2,
            "imagem": "./img/pack_heineken.webp"
        },
        {
            "classe": "cerveja",
            "titulo": "Pack de Corona",
            "tipo": "Cerveja",
            "uva": "",
            "preco": 55,
            "unidades": 2,
            "imagem": "./img/pack_corona.webp"
        },
        {
            "classe": "cerveja",
            "titulo": "Amstel",
            "tipo": "Cerveja",
            "uva": "",
            "preco": 60,
            "unidades": 1,
            "imagem": "./img/amstel_lata_engradado.jpeg"
        },
        {
            "classe": "espumante",
            "titulo": "Garibaldi",
            "tipo": "Brut",
            "uva": "",
            "preco": 35,
            "unidades": 6,
            "imagem": "./img/garibaldiVeroBrut.jpeg"
        }
        // {
        //     "classe": "vinho",
        //     "titulo": "Chac Chac - Branco",
        //     "tipo": "Branco",
        //     "uva": "",
        //     "preco": 35,
        //     "unidades": 0,
        //     "imagem": "./img/chacchac_branco.jpeg"
        // },
        // {
        //     "classe": "vinho",
        //     "titulo": "Chac Chac - Rose",
        //     "tipo": "Rose",
        //     "uva": "",
        //     "preco": 35,
        //     "unidades": 0,
        //     "imagem": "./img/chacchac_rose.jpeg"
        // }
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
    }else if (uva === "Malbec"){
        tagUva.classList.add('malbec');
    }else if (uva === "Pinot G & Riesling"){
        tagUva.classList.add('pinot');
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
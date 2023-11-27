const URL = "https://botafogo-atletas.mange.li";

const cria_cartao = (entrada) => {
    const divAtletas = document.getElementById('atletas');

    const container_atleta = document.createElement('article');

    container_atleta.dataset.id = entrada.id;

    const titulo = document.createElement('h3');
    titulo.innerHTML = entrada.nome;
    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    const descricao = document.createElement('p');
    descricao.className = "descricaoJogador";
    descricao.innerHTML = entrada.descricao;

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagem);
    container_atleta.appendChild(descricao);
    
    container_atleta.onclick = manupulaClick;

    divAtletas.appendChild(container_atleta);
};

const limpaAtletas = () => {
    let parent = document.getElementById('atletas');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

const manupulaClick = (e) => {
    const artigo = e.target.closest('article');

    location.href = `detalhe.html?id=${artigo.dataset.id}`;
};

const pega_json = async (url) => {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    console.log(dados);
    return dados;
};

const selecionaOpcao = () => {
    
    const selectOption = document.getElementById('select').value;

    switch (selectOption) {
        case 'optionCompleto':
            elencoCompleto();
        case 'optionMasculino':
            masculino();
        case 'optionFeminino':
            feminino();
    }   
};

/*
Os awaits foram utilizados pois caso o botao fosse clicado varias vezes
rapidamente a secao dos jogadores não era limpa.
*/
const elencoCompleto = async (e) => {
    await limpaAtletas();
    pega_json(`${URL}/all`).then((r) => {
        for (atleta of r){
            cria_cartao(atleta);
        }
    })
};

const feminino = async (e) => {
    await limpaAtletas(); 
    pega_json(`${URL}/feminino`).then((r) => {
        for (atleta of r){
            cria_cartao(atleta);
        }
    })
};

const masculino = async (e) => {
    await limpaAtletas();
    pega_json(`${URL}/masculino`).then((r) => {
        for (atleta of r){
            cria_cartao(atleta);
        }
    })
};

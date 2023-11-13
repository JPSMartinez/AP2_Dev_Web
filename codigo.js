const URL = "https://botafogo-atletas.mange.li";

const cria_cartao = (entrada) => {
    const container_atleta = document.createElement('article');

    const titulo = document.createElement('h3');
    titulo.innerHTML = entrada.nome;
    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    const descricao = document.createElement('p');
    descricao.innerHTML = entrada.descricao;

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagem);
    container_atleta.appendChild(descricao);

    document.body.appendChild(container_atleta);
}

const pega_json = async (url) => {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    return dados;
}

pega_json(`${URL}/all`).then((r) => {
    for (atleta of r){
        cria_cartao(atleta);
    }
})
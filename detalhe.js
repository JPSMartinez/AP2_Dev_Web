const URL = "https://botafogo-atletas.mange.li";

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

console.log(id);

const adicionaDados = (container, dados) => {

    const nome = document.getElementById('nome');
    const nascimento = document.getElementById('nascimento');
    const altura = document.getElementById('altura');
    const posicao = document.getElementById('posicao');

    nome.innerHTML += dados.nome_completo;

    nascimento.innerHTML += dados.nascimento;

    altura.innerHTML += dados.altura;

    posicao.innerHTML += dados.posicao;
    
}

const criaDetalhe = (entrada) => {
    const containerDescricao = document.getElementById('descricao');
    const fotoDados = document.getElementById('fotoDados');
    const img = document.getElementById('fotoAtleta');
    const dados = document.getElementById('dados');
    const descricao = document.getElementById('descricao');

    img.src = entrada.imagem;

    adicionaDados(dados, entrada);

    descricao.innerHTML = entrada.descricao;
}

const pega_json = async (url) => {
    const resposta = await fetch(url);
    const atleta = await resposta.json();
    console.log(atleta);
    return atleta;
}

pega_json(`${URL}/${id}`).then((r) => { 
    criaDetalhe(r)
})
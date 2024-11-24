import {produtos} from './bancoDeDados.js';

const params = new URLSearchParams(window.location.search);
const idCategoria = params.get('categoria');
if(idCategoria === 'Suprimentos'){
    exibirPaginaPorTipo(produtos, idCategoria, '.animais-tipo');
}
if(idCategoria){
    console.log('ID categoria: ', idCategoria);
}else{
    console.log('Não há id de produto na url');
    exibirPaginaPorTipo(produtos, 'animal', '.animais-tipo' );
}

//formatando o preço
function formatarPreco(preco){
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(preco)
}

function exibirPaginaPorTipo(produtos, tipo, containerSeletor){
    injetarBannerHtml();
    //selecionando o container
    const container = document.querySelector(containerSeletor);

    if(!container){
        console.error(`container com seletor "${containerSeletor} não encontrado"`);
        return;
    }

    //filtrar categoria
    let produtosFiltrados;
    
    if(tipo !== 'animal'){
        produtosFiltrados = produtos.filter(produto =>{
            return produto.tipo !== 'animal';
        });
    }
    else{
        produtosFiltrados = produtos.filter(produto => {
        return produto.tipo === tipo;
    });
}

    //gerando e injetando no html
    produtosFiltrados.forEach(produto => {
        const produtoHTML = `
        <div class="animais-tipo-item">
            <a href="./animais.html?p=${produto.id}">
                <img src="${produto.imagem}" alt="${produto.titulo}">
            </a>
            <p>${produto.titulo}</p>
            <h3>${formatarPreco(produto.preco)}</h3>
            <p>Em até 5x no cartão.</p>
            <button class="button">Adicionar ao carrinho</button>
        </div>
        `;
        container.innerHTML +=produtoHTML;
    });
    
}

function injetarBannerHtml(){
    const container = document.querySelector(".animais-main");

    if(!container){
        console.error(`container com seletor "${container} não encontrado"`);
        
    }

    if(idCategoria !== 'Suprimentos' && idCategoria !== null){

    const bannerHtml = `
    <img src="../imagens/animais-${idCategoria}-banner.svg" alt="banner animaispage " id="banner-animais">
    `;
    container.innerHTML += bannerHtml;

    }else{

    container.innerHTML = '';
        const bannerHtml = `
        <img src="../imagens/animais-banner.svg" alt="banner animaispage " id="banner-animais">
    `;
    container.innerHTML += bannerHtml;
    }
    
}


function injetandoProdutosNoHtml(produtos, categoria, containerSeletor){

    //selecionando o container
    const container = document.querySelector(containerSeletor);

    if(!container){
        console.error(`container com seletor "${container} não encontrado"`);
        return;
    }

    //filtrar categoria
    const produtosFiltrados = produtos.filter(produto => {
        return produto.categoria === categoria;
    });

    //gerando e injetando no html
    produtosFiltrados.forEach(produto => {
        const produtoHTML = `
        <div class="animais-tipo-item">
            <a href="./animais.html?p=${produto.id}">
                <img src="${produto.imagem}" alt="${produto.titulo}">
            </a>
            <p>${produto.titulo}</p>
            <h3>${formatarPreco(produto.preco)}</h3>
            <p>Em até 5x no cartão.</p>
            <button class="button" data-id="${produto.id}">Adicionar ao carrinho</button>
        </div>
        `;
        container.innerHTML +=produtoHTML;
    });
}

injetarBannerHtml();
injetandoProdutosNoHtml(produtos, idCategoria, '.animais-tipo');

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

function adicionarAoCarrinho(event) {
    try {
        // Obtendo o ID do produto da URL
        const idProduto = event.target.getAttribute('data-id');
        if (!idProduto) {
            console.error("ID do produto não encontrado");
            return;
        }

        const produto = produtos.find((item) => item.id === idProduto);
        if (!produto) {
            console.error("Produto não encontrado no banco de dados local");
            return;
        }

        const produtoCarrinho = {
            idProduto: produto.id,
            nome: produto.titulo,
            imagem: produto.imagem,
            preco: produto.preco,
            categoria: produto.categoria,
            quantidade: 1,
            descricao: produto.descricao
        };

        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

        carrinho.push(produtoCarrinho);

        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        // Exibindo mensagem de sucesso
        alert(`${produto.titulo} foi adicionado ao carrinho com sucesso.`);

    } catch (error) {
        console.error("Erro ao adicionar produto ao carrinho:", error);
        alert("Ocorreu um erro ao adicionar o produto ao carrinho. Tente novamente.");
    }
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("button")) {
        adicionarAoCarrinho(event);
    }
});

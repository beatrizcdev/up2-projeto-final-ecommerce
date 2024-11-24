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
        console.error(`container com seletor "${container} não encontrado"`);
        return;
    }

    //filtrar categoria
    const produtosFiltrados = produtos.filter(produto => {
        return produto.tipo === tipo;
    });

    if(!produtosFiltrados){
        produtosFiltrados == produtos.filter(produto =>{
            return produto.tipo !== 'animais';
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
            class="button">Adicionar ao carrinho</a>
        </div>
        `;
        container.innerHTML +=produtoHTML;
    });
    
}

function injetarBannerHtml(){
    const container = document.querySelector(".animais-main");

    if(!container){
        console.error(`container com seletor "${container} não encontrado"`);
        bannerHtml = `
        <img src="../imagens/animais-banner.svg" alt="banner animaispage " id="banner-animais">
    `;
    container.innerHTML += bannerHtml;
    }

    const bannerHtml = `
    <img src="../imagens/animais-${idCategoria}-banner.svg" alt="banner animaispage " id="banner-animais">
    `;
    container.innerHTML += bannerHtml;
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
            class="button">Adicionar ao carrinho</a>
        </div>
        `;
        container.innerHTML +=produtoHTML;
    });
}

injetarBannerHtml();
injetandoProdutosNoHtml(produtos, idCategoria, '.animais-tipo');
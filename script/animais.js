import {produtos} from './bancoDeDados.js';

const params = new URLSearchParams(window.location.search);
const idCategoria = params.get('categoria');

if(idCategoria){
    console.log('ID categoria: ', idCategoria);
}else{
    console.log('Não há id de produto na url')
    window.location.href = '/';
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

    //formatando o preço
    function formatarPreco(preco){
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(preco)
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

injetandoProdutosNoHtml(produtos, idCategoria, '.animais-tipo');
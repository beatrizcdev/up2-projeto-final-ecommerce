import { produtos } from './bancoDeDados.js';
import { carregarCarrinho } from './carrinho.js';

const params = new URLSearchParams(window.location.search);
const idCategoria = params.get('categoria');
if (idCategoria === 'Suprimentos') {
    exibirPaginaPorTipo(produtos, idCategoria, '.animais-tipo');
}
if (idCategoria) {
    console.log('ID categoria: ', idCategoria);
} else {
    console.log('Não há id de produto na url');
    exibirPaginaPorTipo(produtos, 'animal', '.animais-tipo');
}

// formatando o preço
function formatarPreco(preco) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(preco);
}

function exibirPaginaPorTipo(produtos, tipo, containerSeletor) {
    injetarBannerHtml();
    // selecionando o container
    const container = document.querySelector(containerSeletor);

    if (!container) {
        console.error(`Container com seletor "${containerSeletor}" não encontrado`);
        return;
    }

    // filtrar categoria
    let produtosFiltrados;

    if (tipo !== 'animal') {
        produtosFiltrados = produtos.filter(produto => {
            return produto.tipo !== 'animal';
        });
    } else {
        produtosFiltrados = produtos.filter(produto => {
            return produto.tipo === tipo;
        });
    }

    // gerando e injetando no html
    produtosFiltrados.forEach(produto => {
        const produtoHTML = `
        <div class="animais-tipo-item">
            <a href="./pagina.html?p=${produto.id}">
                <img src="${produto.imagem}" alt="${produto.titulo}">
            <p>${produto.titulo}</p>
            <h3>${formatarPreco(produto.preco)}</h3>
            <p>Em até 5x no cartão.</p>
            <button data-id="${produto.id}" class="product__button">Comprar</button>
            </a>
        </div>
        `;
        container.innerHTML += produtoHTML;

        // Selecionando o botão de adicionar ao carrinho
        const botaoAdicionar = container.querySelector(`.product__button[data-id="${produto.id}"]`);
        if (botaoAdicionar) {
            botaoAdicionar.addEventListener('click', function () {
                adicionarAoCarrinho(produto.id);
            });
        }
    });
}

function injetarBannerHtml() {
    const container = document.querySelector(".animais-main");

    if (!container) {
        console.error(`Container com seletor "${container}" não encontrado`);
    }

    if (idCategoria !== 'Suprimentos' && idCategoria !== null) {
        const bannerHtml = `
        <img src="../imagens/animais-${idCategoria}-banner.svg" alt="banner animaispage " id="banner-animais">
        `;
        container.innerHTML += bannerHtml;
    } else {
        container.innerHTML = '';
        const bannerHtml = `
        <img src="../imagens/home-banner-main.svg" alt="banner animaispage " id="banner-animais">
        `;
        container.innerHTML += bannerHtml;
    }
}

function injetandoProdutosNoHtml(produtos, categoria, containerSeletor) {
    const container = document.querySelector(containerSeletor);

    if (!container) {
        console.error(`Container com seletor "${containerSeletor}" não encontrado`);
        return;
    }

    // filtrar categoria
    const produtosFiltrados = produtos.filter(produto => {
        return produto.categoria === categoria;
    });

    // gerando e injetando no html
    produtosFiltrados.forEach(produto => {
        const produtoHTML = `
        <div class="animais-tipo-item">
            <a href="./produto.html?p=${produto.id}">
                <img src="${produto.imagem}" alt="${produto.titulo}">
            <p>${produto.titulo}</p>
            <h3>${formatarPreco(produto.preco)}</h3>
            <p>Em até 5x no cartão.</p>
            <button type="button" class="button" data-id="${produto.id}">Comprar</button>
            </a>
        </div>
        `;
        container.innerHTML += produtoHTML;

    });
}

injetarBannerHtml();
injetandoProdutosNoHtml(produtos, idCategoria, '.animais-tipo');

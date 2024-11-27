import { produtos } from './bancoDeDados.js';
import { carregarCarrinho } from './carrinho.js';
import { injetarFooter } from './home.js';

const params = new URLSearchParams(window.location.search);
const idTipo = params.get('tipo');
const idCategoria = params.get('categoria');

console.log('categoria: ', idCategoria);
console.log('tipo: ', idTipo);


// formatando o preço
function formatarPreco(preco) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(preco);
}

function criandoLinksParaOsFiltros(containerSeletor){
    const container = document.querySelector(containerSeletor);
    if (!container) {
        console.error(`Container com seletor "${containerSeletor}" não encontrado`);
        return;
    }

    if(idCategoria === null){
        return;
    }else{
        container.innerHTML = `
        <div class="animais-grid-item">
                <a href="./animais.html?categoria=${encodeURIComponent(idCategoria)}&tipo=animal">
                <img src="./imagens/lagartoicon-animais.svg" alt="animais"></a>
            </div>
            <div class="animais-grid-item">
                <a href="./animais.html?categoria=${encodeURIComponent(idCategoria)}&tipo=comida">
                <img src="./imagens/comidaicon-animais.svg" alt="comidas"></a>
            </div>
            <div class="animais-grid-item">
                <a href="./animais.html?categoria=${encodeURIComponent(idCategoria)}&tipo=acessório">
                <img src="./imagens/outrosicon-animais.svg" alt="acessórios"></a>
            </div>
        `
    }
}

const limiteInicial = 12;
let quantidadeAtual = limiteInicial;
const botaoVerMais = document.querySelector('#botao_ver_mais');

//exibir paginas por tipo específico
function injetandoProdutosNoHtmlPorTipo(produtos, tipo, categoria, containerSeletor){
    const container = document.querySelector(containerSeletor);
    if (!container) {
        console.error(`Container com seletor "${containerSeletor}" não encontrado`);
        return;
    }

    let produtosFiltrados = produtos;

    if(categoria !== null){

        if(categoria === 'Suprimentos'){
            produtosFiltrados = produtosFiltrados.filter(produto => {
                return produto.tipo !== 'animal';
            });
        }else{
            produtosFiltrados = produtos.filter(produto => {
                return produto.categoria === categoria;
            });
        }

    }

    if(tipo !== null){
        produtosFiltrados = produtosFiltrados.filter(produto => {
            return produto.tipo === tipo;
        });
    }

    if(produtosFiltrados.length === 0){
        const produtoHTML = `
        <h3> Parece que não temos nada poraqui...</h3>`
        container.innerHTML += produtoHTML;
        botaoVerMais.style.display = 'none';
        return;
    }

    const inicio = quantidadeAtual-limiteInicial;
    const fim = Math.min(quantidadeAtual, produtosFiltrados.length);

    // gerando e injetando no html
    for(let i = inicio; i<quantidadeAtual && i<produtosFiltrados.length; i++){
        const produto = produtosFiltrados[i];
        const produtoHTML = `
        <div class="animais-tipo-item">
            <a href="./produto.html?p=${produto.id}">
                <img src="${produto.imagem}" alt="${produto.titulo}">
            <p>${produto.titulo}</p>
            <h3>${formatarPreco(produto.preco)}</h3>
            <p>Em até 5x no cartão.</p>
            <button data-id="${produto.id}" class="product__button">Comprar</button>
            </a>
        </div>
        `;
        container.innerHTML += produtoHTML;
    };

    if(quantidadeAtual >=produtosFiltrados.length){
        botaoVerMais.style.display = 'none';
    }else{
        botaoVerMais.style.display = 'block';
    }
}


botaoVerMais.addEventListener('click', () => {
    quantidadeAtual += limiteInicial;
    injetandoProdutosNoHtmlPorTipo(produtos, idTipo, idCategoria, '.animais-tipo');
})

function injetarBannerHtml() {
    const container = document.querySelector(".animais-main");

    if (!container) {
        console.error(`Container com seletor "${container}" não encontrado`);
    }

    if (idCategoria !== 'Suprimentos' && idCategoria !== null) {
        const bannerHtml = `
        <img src="./imagens/animais-${idCategoria}-banner.svg" alt="banner animaispage " id="banner-animais">
        `;
        container.innerHTML += bannerHtml;
    } else {
        container.innerHTML = '';
        const bannerHtml = `
        <img src="./imagens/home-banner-main.svg" alt="banner animaispage " id="banner-animais">
        `;
        container.innerHTML += bannerHtml;
    }
}

const botaoVoltarAoTopo = document.querySelector('.voltarAoTopo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        botaoVoltarAoTopo.style.display = 'block';
    } else {
        botaoVoltarAoTopo.style.display = 'none';
    }
});

botaoVoltarAoTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

criandoLinksParaOsFiltros('.animais-grid-container')
injetandoProdutosNoHtmlPorTipo(produtos, idTipo, idCategoria, '.animais-tipo');
injetarFooter();
injetarBannerHtml();
export{formatarPreco};

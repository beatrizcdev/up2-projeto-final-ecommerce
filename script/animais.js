import { produtos } from './bancoDeDados.js';
import { carregarCarrinho } from './carrinho.js';

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

//exibir paginas por tipo específico
function injetandoProdutosNoHtmlPorTipo(produtos, tipo, categoria, containerSeletor){
    injetarBannerHtml();
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

    // gerando e injetando no html
    produtosFiltrados.forEach(produto => {
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
injetandoProdutosNoHtmlPorTipo(produtos, idTipo, idCategoria, '.animais-tipo')
export{formatarPreco};

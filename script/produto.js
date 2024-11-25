import { produtos } from './bancoDeDados.js';
import {atualizarCarrinho, formatarPreco} from './carrinho.js'

export const params = new URLSearchParams(window.location.search);
const idProduto = params.get('p');

if(idProduto){
    console.log('ID do produto: ', idProduto);
    carregarDetalhesProduto(idProduto, ".produto_main");
}else{
    console.log('Não há id de produto na url');
    window.location.href = '/';
}

function carregarDetalhesProduto(idProduto, containerSeletor){
    const container = document.querySelector(containerSeletor);

    if (!container) {
        console.error(`Container com seletor "${containerSeletor}" não encontrado`);
        return;
    }

    //filtrando por id
    let produtoFiltrado = produtos.find(produto => produto.id === idProduto);

    if(!produtoFiltrado){
        console.error('Produto não encontrado')
            return;
    }

    //filtando a tag
    function tagFiltro(tipo){
        if(tipo === 'animal'){
            return{
                imagem: './imagens/produto-animal.svg',
                texto: 'Animal'
            };
        }else {
            return{
                imagem: './imagens/produto-suprimento.svg',
                texto: 'Suprimentos'
            }
        }
    }

    const imagem = document.querySelector("#produto_imagem");
    const titulo = document.querySelector("#produto_titulo");
    const preco = document.querySelector("#produto_preco");
    const tagImagem = document.querySelector("#produto_tag-imagem");
    const tagTexto = document.querySelector("#produto_tag-texto");
    const descricao = document.querySelector("#produto_descricao");

    if(!imagem||!titulo ||!preco ||!tagImagem ||!tagTexto || !descricao){
        console.error("Elementos HTML não encontrados!");
        return;
    }

    imagem.src = produtoFiltrado.imagem;
    imagem.alt = produtoFiltrado.titulo;
    titulo.textContent = produtoFiltrado.titulo;
    preco.textContent = formatarPreco(produtoFiltrado.preco);
    tagImagem.src = tagFiltro(produtoFiltrado.tipo).imagem;
    tagImagem.alt = tagFiltro(produtoFiltrado.tipo).texto;
    tagTexto.textContent = tagFiltro(produtoFiltrado.tipo).texto;
    descricao.textContent = produtoFiltrado.descricao;
};

window.alterarQuantidade = function(valor){
    const inputQuantidade = document.querySelector("#product__quantity_number");
    let quantidadeAtual = parseInt(inputQuantidade.value);

    if(!quantidadeAtual){
        quantidadeAtual = 1;
    }
    
    quantidadeAtual += valor;
  
    if(quantidadeAtual < 1){
        quantidadeAtual = 1;
    }

    inputQuantidade.value = quantidadeAtual;

}

document.querySelector("#product__form").addEventListener("submit", (event) => {
    event.preventDefault();
});

document.addEventListener("DOMContentLoaded", () =>{
    const btnMinus = document.querySelector(".product__quantity--minus");
    const btnPlus = document.querySelector(".product__quantity--plus");
  
    console.log("Botão menos:", btnMinus);
    console.log("Botão mais:", btnPlus);
  
    if (btnMinus && btnPlus) {
      btnMinus.addEventListener("click", () => alterarQuantidade(-1));
      btnPlus.addEventListener("click", () => alterarQuantidade(1));
    } else {
      console.error("Botões não encontrados!");
    }
});

function adicionarAoCarrinho(){
    const idProduto = params.get('p');
    if(!idProduto){
        console.error("ID do produto não encontrado");
        return;
    }

    let produtoFiltrado = produtos.find(produto => produto.id === idProduto);

    if (!produtoFiltrado) {
        console.error('Produto não encontrado');
        return;
    }

    const quantidade = parseInt(document.querySelector("#product__quantity_number").value) || 1;
    const observacao = document.querySelector("#observation").value;

    const produtoCarrinho = {
        idProduto: produtoFiltrado.id,
        nome: produtoFiltrado.titulo,
        imagem: produtoFiltrado.imagem,
        preco: produtoFiltrado.preco,
        tipo: produtoFiltrado.tipo,
        quantidade: quantidade,
        observacao: observacao
    };

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const produtoExistente = carrinho.find(item => item.idProduto === produtoCarrinho.idProduto);

    if (produtoExistente) {
        produtoExistente.quantidade += produtoCarrinho.quantidade;
    } else {
        carrinho.push(produtoCarrinho);
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`${produtoCarrinho.nome} foi adicionado ao carrinho com sucesso.`);

    document.querySelector("#observation").value = '';
    document.querySelector("#product__quantity_number").value = 1;

    const produtosNoCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    atualizarCarrinho(produtosNoCarrinho);
}

document.querySelector(".product__button").addEventListener("click", adicionarAoCarrinho);
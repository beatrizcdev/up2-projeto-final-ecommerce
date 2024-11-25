//import { produtos, carrinho } from "./bancoDeDados";

const modal = document.querySelector("#carrinho_modal");
const openModal = document.querySelector("#carrinho_open");
const closeModal = document.querySelector(".carrinho_out");
const fade = document.querySelector("#fade")

//abrir e fechar o modal
const toggleModal = () =>{
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[openModal, closeModal, fade].forEach(element => {
    element.addEventListener("click", () => toggleModal());
});

let produtosNoCarrinho = [];

function formatarPreco(preco) {
  return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  }).format(preco);
}

function carregarCarrinho() {
  try {
    const produtosCarregados = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (!Array.isArray(produtosCarregados)) {
      console.error("Dados do carrinho estão corrompidos ou não são um array.");
      return;
    }

    if (produtosCarregados.length === 0) {
      console.log("Carrinho vazio");
      return;
    }
    console.log("Produtos no carrinho:", produtosCarregados);

    atualizarCarrinho(produtosCarregados);

  } catch (error) {
    console.error("Erro ao carregar produtos do carrinho:", error);
    document.querySelector(".carrinho-container").innerHTML = "<p>Erro ao carregar o carrinho.</p>";
  } 
}


const carrinhoContainer = document.querySelector("#carrinho_modal .carrinho_section");
     carrinhoContainer.innerHTML = '';

function atualizarCarrinho(produtosCarregados){

     // Atualizar o conteúdo do modal
     const carrinhoContainer = document.querySelector("#carrinho_modal .carrinho_section");
     carrinhoContainer.innerHTML = '';

     if (!produtosCarregados || produtosCarregados.length === 0) {
      console.log("Carrinho vazio ou inválido.");
      return;
    }

    console.log(produtosCarregados);
 
     produtosCarregados.forEach(produto => {
         const carrinhoItem = document.createElement("div");
         carrinhoItem.classList.add("carrinho_section");
 
         carrinhoItem.innerHTML = `
          <div class="carrinho_section_parte1">
            <div class="carrinho_section_baseProduto">
              <img src="${produto.imagem}" alt="${produto.nome}" id="carrinho_imagem_produto">
              <div class="carrinho_produtoDescricao">
                <p>${produto.nome}</p>
                <div class="carrinho_tag">
                  <span class="carrinho_produtoTagTexto">${produto.tipo}</span>
                </div>
              </div>
            </div>
                <button type="button" class="carrinho_lixeira${produto.idProduto}" onclick="removerDoCarrinho('${produto.idProduto}')">
                    <img src="./imagens/Trash.svg" alt="">
                </button>
          </div>
          <div class="carrinho_valorProduto">
            <h2 id="carrinho_preco_produto">${formatarPreco(produto.preco)}</h2>
            <div class="carrinho_seletorDeQuantidade">
              <button class="btn-minus" data-id="${produto.idProduto}"><img src="./imagens/Minus.svg" alt="diminuir"></button>
              <span id="carrinho_produto_quantidade">${produto.quantidade}</span>
              <button class="btn-plus" data-id="${produto.idProduto}"><img src="./imagens/Plus.svg" alt="aumentar"></button>
            </div>
        `;
        carrinhoContainer.appendChild(carrinhoItem);
    });

    atualizarQuantidadeItensCarrinho();
    somarConta();
}

function somarConta() {
  try {
      const produtosNoCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      let subtotal = 0;
      const frete = 0;

      // Calcular subtotal
      for (const produto of produtosNoCarrinho) {
          subtotal += produto.preco * produto.quantidade;
      }

      const total = subtotal + frete;

      const carrinhoValores = document.querySelector(".carrinho_footer");
      if (!carrinhoValores) {
          console.error("Container '.carrinho_footer' não encontrado.");
          return;
      }

      carrinhoValores.innerHTML = "";

      // Criar e adicionar os valores ao carrinho
      const carrinhoPrecos = document.createElement("div");
      carrinhoPrecos.classList.add("carrinho_tiposValores");

      carrinhoPrecos.innerHTML = `
          <div class="carrinho_tiposValores">
              <div id="carrinho_subtotal">
                <p>Subtotal</p>
                <span>${formatarPreco(subtotal)}</span>
              </div>
              <div id="carrinho_entrega">
                <p>Entrega</p>
                <span>${formatarPreco(frete)}</span>
              </div>
              <div id="carrinho_total">
                <p>Total</p>
                <span>${formatarPreco(total)}</span>
              </div>
          </div>
          <div id="carrinho_finalizarCompra">
            <button class="carrinho_finalizarCompra">Finalizar compra</button>
          </div>
      `;
      carrinhoValores.appendChild(carrinhoPrecos);

  } catch (error) {
      console.error("Erro ao calcular a conta:", error);
  }
}

function atualizarQuantidadeItensCarrinho() {
   
    const produtosNoCarrinho = JSON.parse(localStorage.getItem('carrinho'));
    const quantidadeTotal = produtosNoCarrinho.reduce((total, produto) => total + produto.quantidade, 0);

    const quantidadeItensElemento = document.querySelector("#carrinho_quantidadeItens");

    if (quantidadeTotal === 1) {
        quantidadeItensElemento.textContent = `${quantidadeTotal} ítem`;  
    } else {
        quantidadeItensElemento.textContent = `${quantidadeTotal} ítens`; 
    }
}

window.removerDoCarrinho = function(idProduto) {
  try {
      const produtosNoCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
      if (produtosNoCarrinho.length === 0) {
          console.log("Carrinho está vazio.");
          return;
      }
      const produtoFrontendIndex = produtosNoCarrinho.findIndex(p => p.idProduto === idProduto);

      if (produtoFrontendIndex === -1) {
          console.error("Produto não encontrado no carrinho:", idProduto);
          return;
      }
      produtosNoCarrinho.splice(produtoFrontendIndex, 1);
      localStorage.setItem('carrinho', JSON.stringify(produtosNoCarrinho));

      console.log(`Produto ${idProduto} excluído do carrinho.`);
      atualizarCarrinho(produtosNoCarrinho);
  } catch (error) {
      console.error("Erro ao excluir o produto:", error);
  }
}


document.addEventListener('DOMContentLoaded', (event) => {
  const botaoExcluir = document.querySelector(`.carrinho_lixeira`);
  if (botaoExcluir) {
      botaoExcluir.addEventListener("click", removerDoCarrinho(idProduto));
      somarConta();
      atualizarCarrinho();
      atualizarQuantidadeItensCarrinho();
  }
});


carregarCarrinho();

export{carregarCarrinho, atualizarCarrinho, formatarPreco};


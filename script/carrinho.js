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
 
     produtosCarregados.forEach(produto => {
         const carrinhoItem = document.createElement("div");
         carrinhoItem.classList.add("carrinho_section");
 
         carrinhoItem.innerHTML = `
          <div class="carrinho_section_parte1">
            <div class="carrinho_section_baseProduto">
              <img src="${produto.imagem}" alt="${produto.titulo}" id="carrinho_imagem_produto">
              <div class="carrinho_produtoDescricao">
                <p>${produto.titulo}</p>
                <div class="carrinho_tag">
                  <span class="carrinho_produtoTagTexto">${produto.tipo}</span>
                </div>
              </div>
            </div>
                <button type="button" class="carrinho_lixeira" onclick="removerDoCarrinho('${produto.idProduto}')">
                    <img src="./image/Trash.svg" alt="">
                </button>
          </div>
          <div class="carrinho_valorProduto">
            <h2 id="carrinho_preco_produto">${formatarPreco(produto.preco)}</h2>
            <div class="carrinho_seletorDeQuantidade">
              <button class="btn-minus" data-id="${produto.idProduto}"><img src="./image/Minus.svg" alt="diminuir"></button>
              <span id="carrinho_produto_quantidade">${produto.quantidade}</span>
              <button class="btn-plus" data-id="${produto.idProduto}"><img src="./image/Plus.svg" alt="aumentar"></button>
            </div>
        `;
        carrinhoContainer.appendChild(carrinhoItem);
    });

    atualizarQuantidadeItensCarrinho();
    somarConta();
    salvarCarrinho();
}

function salvarCarrinho() {
  localStorage.setItem('produtosNoCarrinho', JSON.stringify(produtosNoCarrinho));
}

function somarConta() {
  try {
      // Buscar produtos do Local Storage
      const produtosNoCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      let subtotal = 0;
      const frete = 0; // Pode ser configurado dinamicamente se necessário

      // Calcular subtotal
      for (const produto of produtosNoCarrinho) {
          subtotal += produto.preco * produto.quantidade;
      }

      // Calcula o valor total
      const total = subtotal + frete;

      // Selecionar o container onde os valores serão exibidos
      const carrinhoValores = document.querySelector(".carrinho_footer");
      if (!carrinhoValores) {
          console.error("Container '.carrinho_footer' não encontrado.");
          return;
      }

      // Limpar o conteúdo atual
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

      // Adicionar o novo HTML ao container
      carrinhoValores.appendChild(carrinhoPrecos);

  } catch (error) {
      console.error("Erro ao calcular a conta:", error);
  }
}


function atualizarQuantidadeItensCarrinho() {
   
    const quantidadeTotal = produtosNoCarrinho.reduce((total, produto) => total + produto.quantidade, 0);

    const quantidadeItensElemento = document.querySelector("#carrinho_quantidadeItens");

    if (quantidadeTotal === 1) {
        quantidadeItensElemento.textContent = `${quantidadeTotal} ítem`;  
    } else {
        quantidadeItensElemento.textContent = `${quantidadeTotal} ítens`; 
    }
}

function injetarHtmldoCarrinho(){

};

export{injetarHtmldoCarrinho};
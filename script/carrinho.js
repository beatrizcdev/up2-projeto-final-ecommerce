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

const carrinhoContainer = document.querySelector("#carrinho_modal .carrinho_section");
     carrinhoContainer.innerHTML = '';

function atualizarCarrinho(){
    const quantidadeCarrinho = produtosNoCarrinho.reduce((total, produto) => total + produto.quantidade, 0);
    const badgeQuantidade = document.querySelector(".badge__quantity");
    badgeQuantidade.textContent = quantidadeCarrinho;

     // Atualizar o conteúdo do modal
     const carrinhoContainer = document.querySelector("#carrinho_modal .carrinho_section");
     carrinhoContainer.innerHTML = '';
 
     produtosNoCarrinho.forEach(produto => {
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
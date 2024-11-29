const modal = document.querySelector("#carrinho_modal");
const openModal = document.querySelector("#carrinho_open");
const closeModal = document.querySelector(".carrinho_out");
const fade = document.querySelector("#fade")

window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

//abrir e fechar o modal
const toggleModal = () =>{

  const isModalOpen = !modal.classList.contains("hide"); 
  const whatsapp = document.querySelector(".whatsapp");
        const voltarAoTopo = document.querySelector(".voltarAoTopo");

    if (isModalOpen) {
        console.log("O carrinho está aberto!");
        if(whatsapp){
          whatsapp.style.display = 'block';
          voltarAoTopo.style.display = 'block';
        }
    } else {
        console.log("O carrinho está fechado!");
        if(whatsapp){
          whatsapp.style.display = 'none';
          voltarAoTopo.style.display = 'none';
        }
    }
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
                <button type="button" class="carrinho_lixeira" onclick="removerDoCarrinho('${produto.idProduto}')">
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
          <div id="carrinho_finalizarCompra" style="margin: 0;">
            <button class="carrinho_finalizarCompra">Finalizar compra</button>
          </div>
      `;
      carrinhoValores.appendChild(carrinhoPrecos);

  } catch (error) {
      console.error("Erro ao calcular a conta:", error);
  }
}

function atualizarQuantidadeItensCarrinho() {
   
    const produtosNoCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (produtosNoCarrinho.length === 0) {
      document.querySelector("#carrinho_quantidadeItens").textContent = "0 ítens";
      return;
    }
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
      somarConta();
      atualizarQuantidadeItensCarrinho();
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

function limparCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  console.log("Carrinho atual no localStorage:", carrinho);

  if (carrinho.length === 0) {
      alert("Carrinho já está vazio.");
      return;
  }

  localStorage.removeItem('carrinho');
  console.log("Carrinho limpo do localStorage.");

  const carrinhoContainer = document.querySelector(".carrinho_section");
  if (carrinhoContainer) {
      carrinhoContainer.innerHTML = '';
  }
  atualizarCarrinho(carrinho);

  console.log("Carrinho foi completamente limpo.");
}


function excluirTudo(event) {
  event.preventDefault();

  if (event) {
      const elementoClicado = event.target.closest(".carrinho_excluirTudo");
      if (!elementoClicado) return;
  }

  limparCarrinho();
  atualizarCarrinho(); 
  atualizarQuantidadeItensCarrinho();
}

function finalizarCompra(event) {

  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  if (carrinho.length === 0) {
      alert("Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.");
      return;
  }

  alert(`Compra Realizada com sucesso.`);
  limparCarrinho();
  atualizarCarrinho();
  atualizarQuantidadeItensCarrinho();
}

function alterarQuantidadeProduto(idProduto, valor) {
  try {
      const produtosNoCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      console.log("Carrinho atual:", produtosNoCarrinho);

      const produto = produtosNoCarrinho.find(p => p.idProduto === idProduto);

      if (!produto) {
          console.error("Produto não encontrado no carrinho:", idProduto);
          return;
      }

      const novaQuantidade = produto.quantidade + valor;

      if (novaQuantidade < 1) {
          console.warn("A quantidade mínima é 1. Ajustando...");
          return;
      }

      produto.quantidade = novaQuantidade;
      console.log(`Produto ${idProduto} atualizado para nova quantidade:`, novaQuantidade);

      localStorage.setItem('carrinho', JSON.stringify(produtosNoCarrinho));

      // Atualizar o frontend
      atualizarCarrinho(produtosNoCarrinho);
      somarConta();
      atualizarQuantidadeItensCarrinho();
  } catch (error) {
      console.error("Erro ao atualizar a quantidade do produto:", error);
  }
}


document.addEventListener("click", (event) => {
  if (event.target.closest(".carrinho_finalizarCompra")) {
      finalizarCompra(event);
  }
});

document.addEventListener('DOMContentLoaded', (event) =>{
  const botaoExcluirTudo = document.querySelector(".carrinho_excluirTudo");
  if (botaoExcluirTudo) {
      botaoExcluirTudo.addEventListener("click", excluirTudo);
      
  }
});

document.addEventListener("click", function(event) {

  // Botão Menos 
  if (event.target.closest(".btn-minus")) {
      const idProduto = event.target.closest(".btn-minus").dataset.id;
      alterarQuantidadeProduto(idProduto, -1, event);
  }

  // Botão mais
  if (event.target.closest(".btn-plus")) {
      const idProduto = event.target.closest(".btn-plus").dataset.id;
      alterarQuantidadeProduto(idProduto, 1, event);
  }
});


carregarCarrinho();

export{carregarCarrinho, atualizarCarrinho, formatarPreco};


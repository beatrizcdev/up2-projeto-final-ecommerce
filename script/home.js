const botaoVoltarAoTopo = document.querySelector('.voltarAoTopo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
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

function injetarFooter(){
    const footer = document.querySelector('footer');
    footer.innerHTML = `
    <div class="logo-e-texto">
      <img src="./imagens/mundo-exotico-logotipo.svg" alt="Logo">
      <p id="footer-paragrafo">A Mundo Exótico é uma loja especializada em animais exóticos, oferecendo répteis, aves, anfíbios e pequenos mamíferos. Com foco no bem-estar dos animais, a loja fornece produtos e cuidados especializados, além de orientações sobre manutenção e preservação. Ideal para amantes da fauna exótica.</p>
    </div>

    <div class="infos-footer">
        <div class="footer-organizacao">
      <div class="contatos-footer">
        <h3>Contatos</h3>
        <ul class="contatos">
          <li>Telefone: 81 99999-9999</li>
          <li>E-mail: mundoexotico@email.com</li>
          <li>Endereço: Rua das Rosas, Paratibe.</li>
          <li>Instagram: @mundoexótico</li>
        </ul>
      </div>

      <div class="pagamentos">
        <h3>Formas de Pagamento</h3>
        <div class="pagamentos-grid">
          <img src="./imagens/logo-cartao.svg" alt="">
          <img src="./imagens/logo-pix.svg" alt="">
          <img src="./imagens/logo-wepay.svg" alt="">
          <img src="./imagens/logo-postepay.svg" alt="">
          <img src="./imagens/logo-dinners.svg" alt="">
          <img src="./imagens/logo-clickbank.svg" alt="">
        </div>
      </div>

      <div class="redes-sociais">
        <h3>Nossas Redes Sociais</h3>
        <div class="redes-sociais-grid">
          <img src="./imagens/paginas-botao-whatsapp.svg" alt="">
          <img src="./imagens/logo-instagram.svg" alt="">
          <img src="./imagens/logo-facebook.svg" alt="">
        </div>
        </div>
      </div>
    </div>
    `
}

injetarFooter();

export{injetarFooter};
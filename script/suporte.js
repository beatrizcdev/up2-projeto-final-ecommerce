const botao = document.querySelector('#suporte_botao-submit');

const inputs = document.querySelectorAll('.suporte-input')

function emitirMensagem(event){
    event.preventDefault();
    alert('Solicitação enviada com sucesso, aguarde retorno no email informado.');
    inputs.forEach(input => input.value = "");
}

botao.addEventListener('click', emitirMensagem);
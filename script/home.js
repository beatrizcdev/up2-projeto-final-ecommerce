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
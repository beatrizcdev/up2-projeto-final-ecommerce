const botaoVoltarAoTopo = document.querySelector('.nav-aside');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
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
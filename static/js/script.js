let slideAtual = 0;
const imgElement = document.getElementById('slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function atualizarSlide() {
    imgElement.src = imagens[slideAtual];
}

prevBtn.onclick = () => {
    slideAtual = (slideAtual - 1 + imagens.length) % imagens.length;
    atualizarSlide();
};

nextBtn.onclick = () => {
    slideAtual = (slideAtual + 1) % imagens.length;
    atualizarSlide();
};

// Auto slide
setInterval(() => {
    slideAtual = (slideAtual + 1) % imagens.length;
    atualizarSlide();
}, 5000);

// Contadores
function atualizarTempo(id, data) {
    const agora = new Date();
    let diff = Math.floor((agora - data) / 1000);

    const anos = Math.floor(diff / (3600 * 24 * 365));
    diff %= 3600 * 24 * 365;
    const dias = Math.floor(diff / (3600 * 24));
    diff %= 3600 * 24;
    const horas = Math.floor(diff / 3600);
    diff %= 3600;
    const minutos = Math.floor(diff / 60);
    const segundos = diff % 60;

    document.getElementById(id).innerText =
        `${anos} anos, ${dias} dias, ${horas}h ${minutos}min ${segundos}s`;
}

setInterval(() => {
    atualizarTempo("tempo_namoro", dataNamoro);
    atualizarTempo("tempo_noivado", dataNoivado);
}, 1000);

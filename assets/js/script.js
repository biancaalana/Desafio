let filtroAtivo = "todas";
let indiceAtual = 0;
const secoesCarousel = document.querySelectorAll("#carousel-dicas .content-dicas");
let intervaloRotacao = null;

function mostrarSecao(index) {
  secoesCarousel.forEach((secao, i) => {
    secao.style.display = (filtroAtivo === "todas")
      ? (i === index ? "flex" : "none")
      : (secao.querySelector("h2").innerText === filtroAtivo ? "flex" : "none");
  });
}

function proximaSecao() {
  if (filtroAtivo !== "todas") return;  // Se filtro ativo, não roda carrossel
  indiceAtual = (indiceAtual + 1) % secoesCarousel.length;
  mostrarSecao(indiceAtual);
}

function filtrarCategoria(categoria) {
  filtroAtivo = categoria;

  if (filtroAtivo === "todas") {
    mostrarSecao(indiceAtual);
    iniciarCarrossel();
  } else {
    clearInterval(intervaloRotacao);  // Para o carrossel
    mostrarSecao(indiceAtual);  // Mostra só o filtro
  }
}

function iniciarCarrossel() {
  clearInterval(intervaloRotacao);
  intervaloRotacao = setInterval(proximaSecao, 5000);
}

// Inicialização
mostrarSecao(indiceAtual);
iniciarCarrossel();

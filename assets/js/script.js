/* Função filtro página dicas */

function filtrarCategoria(categoria) {
  const secoes = document.querySelectorAll(".content-dicas");

  secoes.forEach((secao) => {
    const titulo = secao.querySelector("h2").innerText;
    if (categoria === "todas" || titulo === categoria) {
      secao.style.display = "flex";
    } else {
      secao.style.display = "none";
    }
  });

  // Parar o carrossel se o usuário usar o filtro
  clearInterval(intervaloRotacao);
}

// --- Rotação automática ---
let indiceAtual = 0;
const secoesCarousel = document.querySelectorAll("#carousel-dicas .content-dicas");

function mostrarSecao(index) {
  secoesCarousel.forEach((secao, i) => {
    secao.style.display = i === index ? "flex" : "none";
  });
}

/* Fim função filtro */
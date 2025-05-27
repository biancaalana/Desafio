/* Função para mudar a imagem do carrossel de forma automática */
let count = 1
document.getElementById("radio1").checked = true

/* Chama a função nextImage a cada 2 segundos */
setInterval( function(){
    nextImage()
}, 5000)

function nextImage() {

    /* Soma mais um a variavel contador */
    count++

    /* Se a variável passar de 4, volta a valer 1 */
    if(count>4){
        count = 1
    }

    /* Seleciona o radio button conforme o número do contador */
    document.getElementById("radio"+count).checked = true
}

/* Fim da função do carrossel */

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
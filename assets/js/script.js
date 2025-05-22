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


let canvas = document.getElementById("quadro")

// Inicia o contexto do canvas para desenhar
let ctx = canvas.getContext("2d");

// Define o estilo de preenchimento para a cor azul
ctx.fillStyle = "#0000ff"

// Desenha um retangulo, com o estilo de preenchimento configurado (azul)
ctx.fillRect(0, 0, 100, 100);

// Define o estilo de preenchimento para a cor magenta
ctx.fillStyle = "rgb(255, 0, 255)"

// Desenha um retangulo, com o estilo de preenchimento configurado (magenta)
ctx.fillRect(200, 200, 100, 100)

// Apagar uma area do canvas
ctx.clearRect(50, 50, 50, 50)

// Exemplo animação
let x = 0
let y = 0

let animacao;

let direcaoVertical = "baixo";
let direcaoHorizontal = "direita";

ctx.fillStyle = "#000"

function desenhar() {
    ctx.clearRect(0, 0, 800, 600);

    ctx.fillRect(x, y, 50, 50)

    if (direcaoVertical == "cima") {
        y--
    } else if (direcaoVertical == "baixo") {
        y++
    }

    if (direcaoHorizontal == "esquerda") {
        x--
    } else if (direcaoHorizontal == "direita") {
        x++
    }

    if(y == 0) {
        direcaoVertical = "baixo"
    }

    if (y == 550) {
        direcaoVertical = "cima"
    }

    if (x == 0) {
        direcaoHorizontal = "direita"
    }

    if (x == 750) {
        direcaoHorizontal = "esquerda" 
    }

    // x++
    // y++

    animacao = requestAnimationFrame(desenhar)
}

desenhar()
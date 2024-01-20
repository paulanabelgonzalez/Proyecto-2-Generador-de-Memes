// borrar Y escribir las letras del contenedor
const memeTexSuperior = document.getElementById("meme_tex__superior");
console.log(memeTexSuperior)
const textoSuperior = document.getElementById("texto_superior");
console.log(textoSuperior)
const memeTexInferior = document.getElementById("meme_tex__inferior");
const textoInferior = document.getElementById("texto_inferior");

// superior (borrar)
textoSuperior.addEventListener("click", () => {
    textoSuperior.innerText = "";
    memeTexSuperior.innerText = "";
})

// (escribir)
textoSuperior.addEventListener("keyup", (e) => {
    console.log(e)
    let textSup = e.target.value;
    memeTexSuperior.innerText = textSup
})

// inferior (borrar)
textoInferior.addEventListener("click", () => {
    textoInferior.innerText = "";
    memeTexInferior.innerText = "";
})

// (escribir)
textoInferior.addEventListener("keyup", (e) => {
    console.log(e)
    let textInf = e.target.value;
    memeTexInferior.innerText = textInf
})

// sacar contenedor de texto
const checkSuperior = document.getElementById("check_superior");
console.log(checkSuperior);
const checkInferior = document.getElementById("check_inferior");
console.log(checkInferior);

const ocultarContenedor = (checkbox, texto) => {
    console.log(checkbox.checked)
    texto.classList.toggle("ocultar")
}
checkSuperior.addEventListener("change", () => ocultarContenedor(checkSuperior, memeTexSuperior));
checkInferior.addEventListener("change", () => ocultarContenedor(checkInferior, memeTexInferior));
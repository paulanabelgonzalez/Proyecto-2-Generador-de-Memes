// evento para aparecer la solapa de imagen

const btnImagen = document.getElementById("btn_imagen");
const contenedorImagen = document.getElementById("contenedor_imagen");

btnImagen.addEventListener("click", () => {
    contenedorImagen.style.display = "block"
})

// evento para aparecer la solapa de texto

const btnTexto = document.getElementById("btn_texto");
const contenedorTexto = document.getElementById("contenedor_texto");

btnTexto.addEventListener("click", () => {
    contenedorTexto.style.display = "block"
})

// evento para cerrar solapas

const btnCerrarImagen = document.getElementById("btn_cerrar__imagen");
const btnCerrarTexto = document.getElementById("btn_cerrar__texto");
// let solapa = " "
// const cerrarSolapa = () => {
//     solapa.style.display = "none"
// }
// btnCerrarImagen.addEventListener("click", cerrarSolapa)
// btnCerrarTexto.addEventListener("click", cerrarSolapa)

//cerrar solapa imagen 

btnCerrarImagen.addEventListener("click", () => {
    contenedorImagen.style.display = "none"
});

// cerrar solapa texto

btnCerrarTexto.addEventListener("click", () => {
    contenedorTexto
        .style.display = "none"
});
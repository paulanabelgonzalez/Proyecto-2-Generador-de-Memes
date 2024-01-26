// evento para aparecer el contenedor de imagen e intercambiarla con la de texto

const btnImagen = document.getElementById("btn_imagen");
const contenedorImagen = document.getElementById("contenedor_imagen");

btnImagen.addEventListener("click", () => {
    contenedorImagen.style.display = "block"
    contenedorTexto.style.display = "none"
    archivoUrl.style.display = "none"
})

// evento para aparecer el contenedor de texto e intercambiarla con la de imagen

const btnTexto = document.getElementById("btn_texto");
const contenedorTexto = document.getElementById("contenedor_texto");

btnTexto.addEventListener("click", () => {
    contenedorTexto.style.display = "block"
    contenedorImagen.style.display = "none"
})

// evento para cerrar contenedores

const btnCerrarImagen = document.getElementById("btn_cerrar__imagen");
const btnCerrarTexto = document.getElementById("btn_cerrar__texto");
// let solapa = " "
// const cerrarSolapa = () => {
//     solapa.style.display = "none"
// }
// btnCerrarImagen.addEventListener("click", cerrarSolapa)
// btnCerrarTexto.addEventListener("click", cerrarSolapa)

//cerrar contenedor de imagen 

btnCerrarImagen.addEventListener("click", () => {
    contenedorImagen.style.display = "none"
});

// cerrar contenedor de texto

btnCerrarTexto.addEventListener("click", () => {
    contenedorTexto.style.display = "none"
});

// modo claro y modo oscuro

const btnModo = document.getElementById("btn_modo")
const modo = document.getElementById("modo")
btnModo.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");

    // cambia el texto del boton
    if (modo.innerText == "Modo Claro") {
        modo.innerText = "Modo Oscuro"
    } else {
        modo.innerText = "Modo Claro"
    }

    //    no anda y no se por que? preguntar
    // if (textoColor.value == "#000000" && spanTexto == "#000000") {
    //     textoColor.value == "#f0f8ff"
    //     spanTexto.innerText == "#f0f8ff"
    // } else {
    //     textoColor.value == "#000000"
    //     spanTexto.innerText == "#000000"
    // }
})

// crecer y disminuir el heigth de mi contenedor

const meme = document.getElementById("meme")

window.visualViewport.addEventListener("resize", () => {
    meme.style.height = `calc(${window.visualViewport.width}px - 40px)`
})

// descargar imagen del DOM
const btnDescargar = document.getElementById("btn_descargar")
console.log(btnDescargar)

btnDescargar.addEventListener("click", () => {
    domtoimage.toBlob(meme).then((blob) => {
        window.saveAs(blob, "meme.png");
    });
});
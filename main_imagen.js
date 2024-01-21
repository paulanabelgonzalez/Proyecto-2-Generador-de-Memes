// evento para que aparezca el input de url

const labelUrl = document.getElementById("label_url");

labelUrl.addEventListener("click", () => {
    archivoUrl.style.display = "block"
})

// intercambiar input

const labelPc = document.getElementById("label_pc");

labelPc.addEventListener("click", () => {
    archivoUrl.style.display = "none"
})

// función para cargar imagen

const memeImg = document.getElementById("meme_img");

// por input url
const archivoUrl = document.getElementById("archivo_url");

archivoUrl.addEventListener("input", () => {
    console.log(archivoUrl.value)
    memeImg.style.backgroundImage = `url(${archivoUrl.value})`;
    memeImg.style.backgroundPosition = "center center";
    // memeImg.style.backgroundRepeat = "no-repeat"
    // memeImg.style.backgroundSize = "cover";
})

// por input file(pc)
const archivoPc = document.getElementById("archivo_pc");

archivoPc.addEventListener("input", (e) => {
    const archivo = e.target.files[0];
    console.log(e.target[0])
    if (archivo) {
        const lector = new FileReader();
        lector.onload = e => {
            memeImg.style.backgroundImage = `url(${e.target.result})`;
            // archivoUrl.style.display = "none"
        }
        lector.readAsDataURL(archivo)
    }
});

//cambiar el color de fondo
const imgFondoColor = document.getElementById("img_fondo_color");
console.log(imgFondoColor)
const spanColor = document.getElementById("span_color");
console.log(spanColor)

// imgFondoColor.addEventListener("input", () => {
//     console.log(imgFondoColor.value);
//     memeImg.style.backgroundColor = imgFondoColor.value;
//     spanColor.innerText = imgFondoColor.value // valor del imput color
// })

const cambiarColor = (contenedorColor, spanColor, color) => {
    contenedorColor.style.backgroundColor = color.value
    spanColor.innerText = color.value
}

imgFondoColor.addEventListener("input", () => cambiarColor(memeImg, spanColor, imgFondoColor))

// fondo menu blend-mode
const fondoMenu = document.getElementById("fondo_menu");
console.log(fondoMenu)

fondoMenu.addEventListener("change", (e) => {
    let opcionBlendMode = e.target.value
    memeImg.style.backgroundBlendMode = opcionBlendMode
})

// filtros 
const brillo = document.getElementById("brillo");
const opacidad = document.getElementById("opacidad");
const contraste = document.getElementById("contraste");
const desenfoque = document.getElementById("desenfoque")
const grises = document.getElementById("grises");
const sepia = document.getElementById("sepia");
const tono = document.getElementById("tono");
const saturado = document.getElementById("saturado");
const negativo = document.getElementById("negativo");

const ponerFiltros = () => {
    memeImg.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px) grayscale(${grises.value}%) sepia(${sepia.value}%) hue-rotate(${tono.value}deg) saturate(${saturado.value}%) invert(${negativo.value})`
    console.log(brillo.value)
}

brillo.addEventListener("input", ponerFiltros);
opacidad.addEventListener("input", ponerFiltros);
contraste.addEventListener("input", ponerFiltros);
desenfoque.addEventListener("input", ponerFiltros);
grises.addEventListener("input", ponerFiltros);
sepia.addEventListener("input", ponerFiltros);
tono.addEventListener("input", ponerFiltros);
saturado.addEventListener("input", ponerFiltros);
negativo.addEventListener("input", ponerFiltros);

// restablecer filtros

const btnReestablecer = document.getElementById("btn_reestablecer")

btnReestablecer.addEventListener("click", () => {
    memeImg.style.filter = "none"
})
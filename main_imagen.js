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

archivoPc.addEventListener("change", (e) => {
    const archivo = e.target.files[0];
    console.log(e.target[0])
    if (archivo) {
        const lector = new FileReader();
        lector.onload = e => {
            memeImg.style.backgroundImage = `url(${e.target.result})`;
        }
        lector.readAsDataURL(archivo)
    }
});



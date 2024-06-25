// evento para aparecer el contenedor de imagen e intercambiarla con la de texto

const btnImagen = document.getElementById("btn_imagen");
const contenedorImagen = document.getElementById("contenedor_imagen");

btnImagen.addEventListener("click", () => {
	contenedorImagen.style.display = "block";
	contenedorTexto.style.display = "none";
	archivoUrl.style.display = "none";

	if (window.visualViewport.width >= 970) {
		contenedorPrincipal.style.width = "calc(100% - 335px )";
		main.style.justifyContent = "flex-end";
	} else {
		contenedorPrincipal.style.width = "100%";
		main.style.justifyContent = "center";
	}
});

// evento para aparecer el contenedor de texto e intercambiarla con la de imagen

const btnTexto = document.getElementById("btn_texto");
const contenedorTexto = document.getElementById("contenedor_texto");
const contenedorPrincipal = document.querySelector(".contenedor_principal");
const main = document.querySelector("main");
console.log(main);
const body = document.querySelector("body");
console.log(body);

btnTexto.addEventListener("click", () => {
	contenedorTexto.style.display = "flex";
	contenedorImagen.style.display = "none";

	if (window.visualViewport.width >= 970) {
		contenedorPrincipal.style.width = "calc(100% - 335px )";
		main.style.justifyContent = "flex-start";
	} else {
		contenedorPrincipal.style.width = "100%";
		main.style.justifyContent = "center";
	}
});
console.log(contenedorPrincipal);

// evento para cerrar contenedores

const btnCerrarImagen = document.getElementById("btn_cerrar__imagen");
const btnCerrarTexto = document.getElementById("btn_cerrar__texto");

btnCerrarImagen.addEventListener("click", () => {
	contenedorImagen.style.display = "none";
	contenedorPrincipal.style.width = "100%";
	main.style.justifyContent = "center";
});

// cerrar contenedor de texto

btnCerrarTexto.addEventListener("click", () => {
	contenedorTexto.style.display = "none";
	contenedorPrincipal.style.width = "100%";
	main.style.justifyContent = "center";
	// contenedorPrincipal.style.alignItems = "center";
});

// modo claro y modo oscuro

const btnModo = document.getElementById("btn_modo");
const modo = document.getElementById("modo");
btnModo.addEventListener("click", () => {
	document.body.classList.toggle("oscuro");

	// cambia el texto del boton
	if (modo.innerText == "Modo Claro") {
		modo.innerText = "Modo Oscuro";
	} else {
		modo.innerText = "Modo Claro";
	}

	//  cambia el value del input en modo oscuro
	if (document.body.classList.contains("oscuro")) {
		textoColor.value = "#f0f8ff";
		spanTexto.innerText = "#f0f8ff";
		textFondoColor.value = "#1b1e31";
		spanFondo.innerText = "#1b1e31";
	} else {
		textoColor.value = "#000000";
		spanTexto.innerText = "#000000";
		textFondoColor.value = "#eee7d7";
		spanFondo.innerText = "#eee7d7";
	}
});

// crecer y disminuir el heigth de mi contenedor

const meme = document.getElementById("meme");

window.visualViewport.addEventListener("resize", () => {
	meme.style.height = `calc(${window.visualViewport.width}px - 40px)`;
});

// descargar imagen del DOM

const btnDescargar = document.getElementById("btn_descargar");

btnDescargar.addEventListener("click", () => {
	domtoimage.toBlob(meme).then((blob) => {
		window.saveAs(blob, "meme.png");
	});
});

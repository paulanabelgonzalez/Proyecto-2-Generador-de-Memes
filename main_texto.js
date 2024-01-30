// escribir en el contenedor

const memeTexSuperior = document.getElementById("meme_tex__superior");
console.log(memeTexSuperior);
const textoSuperior = document.getElementById("texto_superior");
console.log(textoSuperior);
const memeTexInferior = document.getElementById("meme_tex__inferior");
const textoInferior = document.getElementById("texto_inferior");

// (escribir)

textoSuperior.addEventListener("keyup", (e) => {
	console.log(e);
	memeTexSuperior.innerText = e.target.value;
});

textoInferior.addEventListener("keyup", (e) => {
	console.log(e);
	memeTexInferior.innerText = e.target.value;
});

// sacar contenedor de texto

const checkSuperior = document.getElementById("check_superior");
console.log(checkSuperior);
const checkInferior = document.getElementById("check_inferior");
console.log(checkInferior);

const ocultarContenedor = (checkbox, texto) => {
	console.log(checkbox.checked);
	texto.classList.toggle("ocultar");
	// memeImg.style.height = "85%"
	// memeImg.style.position = "sticky"
	if (checkSuperior.checked == true && checkInferior.checked == false) {
		memeImg.style.height = "85%";
		memeImg.style.position = "static";
	} else if (checkInferior.checked == true && checkSuperior.checked == false) {
		memeImg.style.height = "85%";
		memeImg.style.top = "15%";
		memeImg.style.position = "relative";
	} else if (checkSuperior.checked == true && checkInferior.checked == true) {
		memeImg.style.height = "100%";
		memeImg.style.position = "static";
		console.log("hola");
	} else if (
		checkSuperior.checked == true &&
		checkInferior.checked == true &&
		(checkTransparente.checked == true || checkTransparente.checked == false)
	) {
		memeImg.style.height = "100%";
		memeImg.style.position = "relative";
	} else {
		memeImg.style.height = "70%";
		memeImg.style.position = "relative";
		memeImg.style.top = "15%";
	}
};
checkSuperior.addEventListener("change", () =>
	ocultarContenedor(checkSuperior, memeTexSuperior)
);
checkInferior.addEventListener("change", () =>
	ocultarContenedor(checkInferior, memeTexInferior)
);

// fuente

const fuenteMenu = document.getElementById("fuente_menu");

fuenteMenu.addEventListener("change", (e) => {
	memeTexSuperior.style.fontFamily = e.target.value;
	memeTexInferior.style.fontFamily = e.target.value;
});

// tamaño

const fuenteTamaño = document.getElementById("fuente_tamaño");

fuenteTamaño.addEventListener("input", (e) => {
	let tamanio = e.target.value;
	memeTexSuperior.style.fontSize = `${tamanio}px`;
	memeTexInferior.style.fontSize = `${tamanio}px`;
});

// alineación de texto

const btnAlineacionIzq = document.getElementById("btn_alineacion_izq");
const btnAlineacionCentro = document.getElementById("btn_alineacion_centro");
const btnAlineacionDer = document.getElementById("btn_alineacion_der");
console.log(btnAlineacionIzq, btnAlineacionCentro, btnAlineacionDer);

const cambiarAlineacion = (alineacion) => {
	memeTexSuperior.style.textAlign = alineacion;
	memeTexInferior.style.textAlign = alineacion;
};

btnAlineacionIzq.addEventListener("click", () => cambiarAlineacion("left"));
btnAlineacionCentro.addEventListener("click", () =>
	cambiarAlineacion("center")
);
btnAlineacionDer.addEventListener("click", () => cambiarAlineacion("right"));

// cambiar color de texto y fondo

const textoColor = document.getElementById("texto_color");
const textFondoColor = document.getElementById("text_fondo_color");
const spanTexto = document.getElementById("span_texto");
const spanFondo = document.getElementById("span_fondo");

// texto

textoColor.addEventListener("input", () => {
	memeTexSuperior.style.color = textoColor.value;
	memeTexInferior.style.color = textoColor.value;
	spanTexto.innerText = textoColor.value;
});

// fondo del texto

textFondoColor.addEventListener("input", () =>
	cambiarColor(memeTexSuperior, spanFondo, textFondoColor)
);
textFondoColor.addEventListener("input", () =>
	cambiarColor(memeTexInferior, spanFondo, textFondoColor)
);

//  poner fondo transparente

const checkTransparente = document.getElementById("check_transparente");
console.log(checkTransparente);

checkTransparente.addEventListener("change", () => {
	if (checkTransparente.checked == true) {
		memeTexSuperior.style.backgroundColor = "transparent";
		memeTexInferior.style.backgroundColor = "transparent";
		memeTexSuperior.style.border = "1px solid transparent";
		memeTexInferior.style.border = "1px solid transparent";
		memeImg.style.height = "100%";
		memeImg.style.position = "static";
	} else {
		memeTexSuperior.style.backgroundColor = textFondoColor.value;
		memeTexInferior.style.backgroundColor = textFondoColor.value;
		memeTexSuperior.style.border = "1px solid #9f8e6f";
		memeTexInferior.style.border = "1px solid #9f8e6f";
		memeImg.style.height = "70%";
		memeImg.style.position = "relative";
	}
});

// cambiar contorno

const btnContornoNinguno = document.getElementById("btn_contorno_ninguno");
const btnContornoClaro = document.getElementById("btn_contorno_claro");
const btnContornoOscuro = document.getElementById("btn_contorno_oscuro");
console.log(btnContornoNinguno, btnContornoClaro, btnContornoOscuro);

const cambiarContorno = (valorContorno) => {
	memeTexSuperior.style.textShadow = valorContorno;
	memeTexInferior.style.textShadow = valorContorno;
	console.log("funciona");
};

btnContornoNinguno.addEventListener("click", () => cambiarContorno("none"));
btnContornoClaro.addEventListener("click", () =>
	cambiarContorno(
		"rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px"
	)
);
btnContornoOscuro.addEventListener("click", () =>
	cambiarContorno(
		"rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px"
	)
);

// espaciado

const espaciado = document.getElementById("espaciado");

espaciado.addEventListener("input", (e) => {
	let valorEspaciado = e.target.value;
	memeTexSuperior.style.height = "auto";
	memeTexInferior.style.height = "auto";
	memeTexSuperior.style.letterSpacing = `${valorEspaciado}px`;
	memeTexInferior.style.letterSpacing = `${valorEspaciado}px`;
});

// interlineado

const interlineadoMenu = document.getElementById("interlineado_menu");

interlineadoMenu.addEventListener("change", () => {
	memeTexSuperior.style.lineHeight = interlineadoMenu.value;
	memeTexInferior.style.lineHeight = interlineadoMenu.value;
	memeImg.style.height = `calc( 72% - ${interlineadoMenu.value * 2}%)`;
});

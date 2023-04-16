const botaoTema = document.getElementById("botao-tema");
const texto = document.getElementById("texto");

let temaEscuro = false;

botaoTema.addEventListener("click", function() {
	if (temaEscuro) {
		document.body.style.backgroundColor = "#f5f5f5";
		document.body.style.color = "#333";
		botaoTema.style.backgroundColor = "#333";
		botaoTema.style.color = "#fff";
		texto.style.color = "#333";
		temaEscuro = false;
	} else {
		document.body.style.backgroundColor = "#333";
		document.body.style.color = "#f5f5f5";
		botaoTema.style.backgroundColor = "#f5f5f5";
		botaoTema.style.color = "#333";
		texto.style.color = "#f5f5f5";
		temaEscuro = true;
	}
});

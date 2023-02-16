var listLinkFilms = JSON.parse(localStorage.getItem("@listOfLinksOfFilms")) || {
	arrayFilms: [],
};
function addFilm() {
	// geting element
	var filmeFavorito = document.querySelector("#filme").value;
	var listFilm = document.querySelector("#filmList");
	// Adicionando na div#listaFilmes
	// Arrays de filmes
	if (
		filmeFavorito.endsWith(".jpg") ||
		filmeFavorito.endsWith(".png") ||
		filmeFavorito.endsWith(".svg")
	) {
		// adicionando no array
		listLinkFilms.arrayFilms.push(filmeFavorito);
		// Exibindo no HTML
		listFilm.innerHTML += `<img src="${filmeFavorito}">`;
		// Salvando os dados
		saveData();
	} else {
		alert(
			"Por favor, insira o link de uma imagem dos seguintes formatos: .jpg, .png ou .svg"
		);
	}

	// Para Limpar o Input Filme
	document.querySelector("#filme").value = "";
}

function saveData() {
	// Salvando os dados no localStorage
	localStorage.setItem("@listOfLinksOfFilms", JSON.stringify(listLinkFilms));
}

function dataLoad() {
	var listOfLinks = JSON.parse(localStorage.getItem("@listOfLinksOfFilms"));

	if (listOfLinks) {
		listOfLinks.arrayFilms.forEach((link) => {
			var listFilm = document.querySelector("#filmList");
			listFilm.innerHTML += `<img src=${link}>`;
		});
	}
}

$(document).ready(function () {
  console.log("jquery est chargé");

  // Exercice selectionner l'élément qui a l'id maSection et remplacer le texte d'origin par "<h2>Bonjour à tous</h2>"

  let maSection = $("#maSection");

  console.log(maSection.html());

  maSection.html("<h2>Bonjour à tous</h2>");
  // la fonction html() de jQuery est équivalent à innerHTML() en JavaScript, elle permet de remplacer ou de d'ajouter
  // du contenu html à l'élément sélectioné ainsi que de récupérer ce contenu pour l'afficher (par exemple).

  // Exercice : selectionner les div qui ont la classe mesDivs
  // appliquer le css :
  /*
        padding: 20px;
        background : 'red';
        margin-top: 10px;
        color : 'navy';
  */

  let mesDivs = $(".mesDivs");
  mesDivs.css("padding", "20px");
  mesDivs.css({ backgroundColor: "red", marginTop: "10px", color: "navy" });

  // exercice : sélectionner les p et appliquer le css suivant :
  /*
    font-family : 'calibri',
    font-size : "21px",
    color : "orange",
    background : lightblue,
    padding : "10px"

*/

  let mesP = $("p");
  mesP.css({
    fontFamily: "calibri",
    fontSize: "21px",
    "background-color": "lightblue",
    padding: "10px",
  });
});

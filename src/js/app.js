//funcion para cambiar el contenido del p
function changeHTMLContent() {
  document.getElementById("texto").innerHTML =
    "El texto ha sido cambiado a: En esta materia aprenderemos sobre el Despliegue de aplicaciones Web";
}

//funcion para cambiar el atributo src de la imagen
function changeHTMLAtribute() {
  document.getElementById("img").src =
    "https://imgs.search.brave.com/PBddIfJe7uqWTXY9dVikjolP0RiGn-quGaBDNxzi_BA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93NS5n/aWZmaXRzc3RhdGlj/LmNvbS9waWNzL2M1/MDQvMzY1Mjc2XzIu/anBn";
}

//funcion para cambiar el estilo css del p
function changeCSSstyle() {
  document.getElementById("texto").style.color = "red";
}

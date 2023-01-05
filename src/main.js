const root = document.getElementById("root");

//Contenedor principal
const contenedorPadre = document.createElement("div");
contenedorPadre.classList.add("contenedor-padre");
root.appendChild(contenedorPadre);

//Contenedor hijo
const contenedorHijo = document.createElement("div");
contenedorHijo.classList.add("contenedor-hijo");
contenedorPadre.appendChild(contenedorHijo);

 //Contenedor de imagen de fondo
 const divImgContainer = document.createElement("div");
 divImgContainer.classList.add("divImgContainer");
 contenedorHijo.appendChild(divImgContainer);

 const imgContainer = document.createElement("img");
 imgContainer.classList.add("imgContainer");
 imgContainer.setAttribute("src", "/safe-pic.png");
 divImgContainer.appendChild(imgContainer);

 //Contenedor funcionalidad
const contenedorFunciones = document.createElement("div");
contenedorFunciones.classList.add("contenedorFunciones");
contenedorHijo.appendChild(contenedorFunciones);


 //Contenedor titulos
 const contenedorTitulos = document.createElement("div");
 contenedorTitulos.classList.add("contenedorTitulos");
 contenedorFunciones.appendChild(contenedorTitulos);

  //Titulo marca
  const titulo = document.createElement("h1");
  titulo.textContent = "Passure";
  contenedorTitulos.appendChild(titulo);

  //Titulo Eslogan
  const subTitulo = document.createElement("h2");
  subTitulo.textContent = "Maximiza tu seguridad";
  contenedorTitulos.appendChild(subTitulo);

// Create a form dynamically
var form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "submit.php");
contenedorFunciones.appendChild(form);

// Create an input element for Full Name
var FN = document.createElement("input");
FN.setAttribute("type", "text");
FN.setAttribute("name", "FullName");
FN.setAttribute("placeholder", "Full Name");
contenedorFunciones.appendChild(FN);

  // create a submit button
  var botonCifrar = document.createElement("input");
  botonCifrar.setAttribute("type", "submit");
  botonCifrar.setAttribute("value", "Cifrar");
  contenedorFunciones.appendChild(botonCifrar);

  // create a submit button
  var s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Copiar");
  contenedorFunciones.appendChild(s);
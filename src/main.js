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

   //Contenedor form
 const contenedorForm = document.createElement("div");
 contenedorForm.classList.add("contenedorForm");
 contenedorFunciones.appendChild(contenedorForm);

// Create a form dynamically
var form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "submit.php");
contenedorForm.appendChild(form);


  //Titulo contraseña
  const rellenarContraseña = document.createElement("p");
  rellenarContraseña.textContent = "Escribe tu contraseña";
  contenedorForm.appendChild(rellenarContraseña);

// Sección contraseña
var contraseña = document.createElement("input");
contraseña.classList.add("contrasenia");
contraseña.setAttribute("type", "text");
contraseña.setAttribute("name", "FullName");
contenedorForm.appendChild(contraseña);




  //Detalle de contraseña
  const instruContra = document.createElement("h5");
 instruContra.textContent = "La contraseña debe tener entre 4 y 8 caracteres";
  contenedorForm.appendChild(instruContra);


 //Contenedor clave y botones
 const contenedorClave = document.createElement("div");
 contenedorClave.classList.add("contenedorClave");
 contenedorForm.appendChild(contenedorClave);

    //Titulo clave
    const clave = document.createElement("p");
   clave.textContent = "Clave";
    contenedorClave.appendChild(clave);

      // Boton cifrado con numeros
  var cifrado = document.createElement("input");
  cifrado.classList.add("cifrado");
  cifrado.setAttribute("id", "desplazamiento");
  cifrado.setAttribute("type", "number");
  cifrado.setAttribute("value", "0");
  contenedorClave.appendChild(cifrado);

  // create a submit button
  var botonCifrar = document.createElement("input");
  botonCifrar.classList.add("botonCifrar");
  botonCifrar.setAttribute("type", "submit");
  botonCifrar.setAttribute("value", "Cifrar");
  contenedorClave.appendChild(botonCifrar);

  //Titulo contraseña
  const ContraSegura = document.createElement("p");
 ContraSegura.textContent = "Contraseña segura";
  contenedorForm.appendChild(ContraSegura);


// Create an input element for Full Name
var contraSeg = document.createElement("input");
contraSeg.classList.add("contraseniaSeg");
contraSeg.setAttribute("type", "text");
contraSeg.setAttribute("name", "FullName");
contenedorForm.appendChild(contraSeg);


  // create a submit button
  var s = document.createElement("input");
  s.classList.add("s");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Copiar");
  contenedorForm.appendChild(s);
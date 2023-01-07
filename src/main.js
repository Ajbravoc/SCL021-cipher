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
 imgContainer.setAttribute("src", "/security-pic.png");
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

// Formulario
var form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "submit.php");
contenedorForm.appendChild(form);


//Titulo contrasenia
const rellenarContraseña = document.createElement("p");
rellenarContraseña.textContent = "Escribe tu contraseña";
contenedorForm.appendChild(rellenarContraseña);

// Input contraseña
const contrasenia = document.createElement("input");
contrasenia.classList.add("contrasenia");
contrasenia.setAttribute("id", "password");
contrasenia.setAttribute("type", "password");
contenedorForm.appendChild(contrasenia);

const img = document.createElement("img");
img.setAttribute("id", "boton");
img.setAttribute("src", "/cerrar-ojo.png");
img.alt = "ojo cerrado";
contenedorForm.appendChild(img);

let inputContrasenia = contrasenia;
let iconOjo = img;
iconOjo.addEventListener("click", mostrarContrasena);
function mostrarContrasena(){
  if (inputContrasenia.type == "password"){
    inputContrasenia.type = "text";
  img.setAttribute("src", "/mostrar-ojo.png"); 
  }else {
    inputContrasenia.type = "password";
     img.setAttribute("src", "/cerrar-ojo.png");
  }
}


  //Detalle de contrasenia
  const instruContra = document.createElement("h5");
 instruContra.textContent = "La contrasenia debe tener entre 4 y 8 caracteres";
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
  cifrado.setAttribute("id", "password");
  cifrado.setAttribute("type", "number");

  contenedorClave.appendChild(cifrado);

  // Boton cifrar
  var botonCifrar = document.createElement("input");
  botonCifrar.classList.add("botonCifrar");
  botonCifrar.setAttribute("type", "submit");
  botonCifrar.setAttribute("value", "Cifrar");
  contenedorClave.appendChild(botonCifrar);

  //Titulo contrasenia
  const ContraSegura = document.createElement("p");
 ContraSegura.textContent = "Contraseña segura";
  contenedorForm.appendChild(ContraSegura);


// Create an input element for Full Name
var contraSeg = document.createElement("input");
contraSeg.classList.add("contraseniaSeg");
contraSeg.setAttribute("type", "text");
contenedorForm.appendChild(contraSeg);

 //Contenedor Botones finales 
 const contenedorBtns = document.createElement("div");
 contenedorBtns.classList.add("contenedorBtns");
 contenedorForm.appendChild(contenedorBtns);

  // Boton Copiar
  var s = document.createElement("input");
  s.classList.add("s");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Copiar");
  contenedorBtns.appendChild(s);


  // Boton Limpiar
  var limpiar = document.createElement("input");
  limpiar.classList.add("limpiar");
  limpiar.setAttribute("type", "reset");
  limpiar.setAttribute("value", "Limpiar");
  contenedorBtns.appendChild(limpiar);


  limpiar.onclick = () => {
    contrasenia.value = "";
    contraSeg.value = "";
    cifrado.id = ""
  };

 const cipher = {
    cifrar:(texto, desplazamiento) =>{ //propiedad cifrar tiene los parámetros contrasenia y despla//
      const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       cifrado = (desplazamiento % 26 + 26) %26; //fórmula cipher para desplazarse, 26 letras del alfabeto
      return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+desplazamiento)%26]);    
  }
  }

 botonCifrar.addEventListener("click", function(){ //LLama a BtnCipher//
  let texto =contrasenia.value; //Llama al contrasenia//
  let desplazamiento = cifrado.value;
contraSeg.value = cipher.cifrar(texto,desplazamiento); //Llama al PasswordCipher donde llama a la const cipher.cifrar para que desplace//
}, true);

   // Funcionamiento botones
   s.addEventListener( "click" , () =>{
    contraSeg.select(); //Select hace focus al campo y el copy lo mueve al portapapeles
    document.execCommand("copy"); //   
      alert("Tu mensaje ha sido copiado!");
  });  


  // Faltan
  1. Modularizar
  2. Terminar funcionalidades
      Ingresar img ojo en los passwords inputs 
      Al hacer click en limpiar que se limpie la clave
      Que cifre de más de uno 
 

 contrasenia.addEventListener("keyup", function(){ //Llama al Id contrasenia desde el html//
      this.value = this.value.toUpperCase(); //Le estamos dando la funcion de poner en mayusculas el mensaje que se esta ingresando
  },true);









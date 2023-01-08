import cipher from "./cipher-function.js";
import { ojoMov, inicio } from "./form-functions.js";

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

//SubTitulo
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

//Titulo escribe contraseña
const rellenarContraseña = document.createElement("p");
rellenarContraseña.textContent = "Escribe tu contraseña";
contenedorForm.appendChild(rellenarContraseña);

// Input contraseña
export const password = document.createElement("input");
password.classList.add("password");
password.setAttribute("id", "password");
password.setAttribute(
  "type",
  "password",
  "oninput = if(this.value.length>this.maxLength)this.value = this.value.slice(0, this.maxLength)"
);
password.setAttribute("maxlength", "8");
contenedorForm.appendChild(password);

//Ojo contraseña
export const img = document.createElement("img");
img.setAttribute("id", "boton");
img.setAttribute("src", "/cerrar-ojo.png");
img.alt = "ojo cerrado";
contenedorForm.appendChild(img);

//Detalle de password
const instruContra = document.createElement("h5");
instruContra.textContent = "La password debe tener entre 4 y 8 caracteres";
contenedorForm.appendChild(instruContra);

//Contenedor padre clave y botones
const contenedorClave = document.createElement("div");
contenedorClave.classList.add("contenedorClave");
contenedorForm.appendChild(contenedorClave);

//Titulo clave
const clave = document.createElement("p");
clave.textContent = "Clave";
contenedorClave.appendChild(clave);

// Input cifrado con numeros
export var cifrado = document.createElement("input");
cifrado.classList.add("inputCifrado");
cifrado.setAttribute("type", "number");
cifrado.setAttribute("id", "cifrado");
contenedorClave.appendChild(cifrado);

// Boton cifrar
var botonCifrar = document.createElement("input");
botonCifrar.classList.add("botonCifrar");
botonCifrar.setAttribute("type", "submit");
botonCifrar.setAttribute("value", "Cifrar");
contenedorClave.appendChild(botonCifrar);

//Titulo password seguro
const tituloPass = document.createElement("p");
tituloPass.textContent = "Contraseña segura";
contenedorForm.appendChild(tituloPass);

//Input contraseña codificada
export let PassCiphered = document.createElement("input");
PassCiphered.classList.add("passCiphered");
PassCiphered.setAttribute("type", "text");
contenedorForm.appendChild(PassCiphered);

//Contenedor padre Botones finales
const contenedorBtns = document.createElement("div");
contenedorBtns.classList.add("contenedorBtns");
contenedorForm.appendChild(contenedorBtns);

// Boton Copiar
var btnCopiar = document.createElement("input");
btnCopiar.classList.add("btnCopiar");
btnCopiar.setAttribute("type", "submit");
btnCopiar.setAttribute("value", "Copiar");
contenedorBtns.appendChild(btnCopiar);

// Boton Limpiar
export var btnLimpiar = document.createElement("input");
btnLimpiar.classList.add("btnLimpiar");
btnLimpiar.setAttribute("type", "reset");
btnLimpiar.setAttribute("value", "Limpiar");
contenedorBtns.appendChild(btnLimpiar);

//Problemas al modularizarlo
btnLimpiar.onclick = () => {
  password.value = "";
  PassCiphered.value = "";
  cifrado.value = "onreset";
};

botonCifrar.addEventListener(
  "click",
  function () {
    //LLama a BtnCipher//
    let texto = password.value; //Llama al password//
    let desplazamiento = cifrado.value;
    PassCiphered.value = cipher(texto, desplazamiento); //Llama al PasswordCipher donde llama a la const cipher.cifrar para que desplace//
  },
  true
);

// Funcionamiento botones
btnCopiar.addEventListener("click", () => {
  PassCiphered.select(); //Select hace focus al campo y el copy lo mueve al portapapeles
  document.execCommand("copy"); //
  alert("Tu mensaje ha sido copiado!");
});

export default (password, img);
ojoMov();
inicio();

// Faltan
// 1. Modularizar
// 2. Terminar funcionalidades
//     Ingresar img ojo en los passwords inputs

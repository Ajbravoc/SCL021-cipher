import {img, password} from "./main.js";
import { PassCiphered,cifrado, btnLimpiar, botonCifrar, btnCopiar } from "./main.js";
import cipher from "./cipher-function.js";


//Función que transforma en mayuscula el valor ingresado en el input text
export function inicio() {
  password.addEventListener(
    "keyup",
    function (event) { 
      if (event.key === "ñ"){
      password.length = password.length -1;
       alert("No se aceptan ni letras ñ ni espacios");
      console.log(password.value)}
      //Llama al Id password desde el html//
      this.value = this.value.toUpperCase(); //Le estamos dando la funcion de poner en mayusculas el mensaje que se esta ingresando
    },
    true
  );}


//Función movimiento de ojo en contraseña
export function ojoMov() {
  let inputpassword = password;
  let iconOjo = img;
  iconOjo.addEventListener("click", mostrarContrasena);
  function mostrarContrasena() {
    if (inputpassword.type == "password") {
      inputpassword.type = "text";
      img.setAttribute("src", "imgs/mostrar-ojo.png");
    } else {
      inputpassword.type = "password";
      img.setAttribute("src", "imgs/cerrar-ojo.png");
    }
  }
}
//Función boton de limpieza de inputs
export function botonLimpiar (){
    //Problemas al modularizarlo
    btnLimpiar.onclick = () => {
    password.value = "";
    PassCiphered.value = "";
    cifrado.value = "onreset";
  };
}

//Function que establece el desplazamiento del cifrado y funcionalidad de boton
export function botonCipher(){
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
}


// Funcionamiento boton copiar
export function botonCopiar (){
    btnCopiar.addEventListener("click", () => {
    PassCiphered.select(); //Select hace focus al campo y el copy lo mueve al portapapeles
    document.execCommand("copy"); //
    alert("Tu mensaje ha sido copiado!");
  });
}


// export { el nombre de cada función, variable, obj ,arreglo }
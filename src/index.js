import cipher from './cipher.js';

window.addEventListener("load", inicio, true);

function inicio(){
    document.getElementById("PasswordText").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase(); //aca le estamos dando la funcion de poner en mayusculas el mensaje que se esta ingresando
    },true);


document.getElementById("BtnCipher").addEventListener("click", function(){
    let texto = document.getElementById("PasswordText").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
document.getElementById("PasswordCipher").value = cipher.cifrar(texto, desplazamiento);
}, true);
}

function seleccionarTexto() { //Funcion con nombre seleccionar 
    let desde = PasswordCipher.selectionStart; //Desde representa el inicio del PasswordCipher
    let hasta = PasswordCipher.selectionEnd; //Hasta representa el fin del PasswordCipher
    let sel = PasswordCipher.value.substring(desde, hasta); // Selecciona los caracteres del PasswordCipher
      //Substring extrae caracteres de una cadena entre dos índices especificado)
  
    if (sel.length > 0) {// Si hay algo seleccionado mayor a 0, considerando que se cuenta desde el 0
      return sel; //retorna todo lo sel
    } else { // de lo contrario selecciona todo el texto
      return PasswordCipher.select();
    }
  }

  BtnCopy.addEventListener("click", () => {
    seleccionarTexto();
    try {
      let exito = document.execCommand("copy"); // devuelve true o false
      /*let msg = exito ? "\xe9xito" : "error";
      console.log("Hay " + msg);*/
    } catch (error) {
      let err = error;
      /*console.log("No fue posible copiar el texto seleccionado!");*/
    }
  });

console.log(cipher);

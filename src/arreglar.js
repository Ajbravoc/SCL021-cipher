import cipher from './cipher.js';

window.addEventListener("load", inicio, true);

function inicio(){
    document.getElementById("PasswordText").addEventListener("keyup", function(){ //Llama al Id Passwordtext desde el html//
        this.value = this.value.toUpperCase(); //Le estamos dando la funcion de poner en mayusculas el mensaje que se esta ingresando
    },true);


document.getElementById("BtnCipher").addEventListener("click", function(){ //LLama a BtnCipher//
    let texto = document.getElementById("PasswordText").value; //Llama al Passwordtext//
    let desplazamiento = document.getElementById("desplazamiento").value; //Llama al desplazamiento//
document.getElementById("PasswordCipher").value = cipher.cifrar(texto, desplazamiento); //Llama al PasswordCipher donde llama a la const cipher.cifrar para que desplace//
}, true);
}

 
    document.getElementById( "BtnCopy" ).addEventListener( "click" , () =>{
    PasswordCipher.select(); //Select hace focus al campo y el copy lo mueve al portapapeles
    document.execCommand("copy"); //   
      alert("Tu mensaje ha sido copiado!");
  });  
  
console.log(cipher);

import cipher from './cipher-funcionalidad';

window.addEventListener("load", inicio, true);

function inicio(){
    document.getElementsByClassName("contrasenia").addEventListener("keyup", function(){ //Llama al Id contrasenia desde el html//
        this.value = this.value.toUpperCase(); //Le estamos dando la funcion de poner en mayusculas el mensaje que se esta ingresando
    },true);


document.getElementsByClassName("BtnCipher").addEventListener("click", function(){ //LLama a BtnCipher//
    let texto = document.getElementsByClassName("contrasenia").value; //Llama al contrasenia//
    let desplazamiento = document.getElementsByClassName("desplazamiento").value; //Llama al desplazamiento//
document.getElementsByClassName("PasswordCipher").value = cipher.cifrar(texto, desplazamiento); //Llama al PasswordCipher donde llama a la const cipher.cifrar para que desplace//
}, true);
}

 
    document.getElementsByClassName( "BtnCopy" ).addEventListener( "click" , () =>{
    PasswordCipher.select(); //Select hace focus al campo y el copy lo mueve al portapapeles
    document.execCommand("copy"); //   
      alert("Tu mensaje ha sido copiado!");
  });  
  
console.log(cipher);

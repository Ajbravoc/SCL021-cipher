
function cipher (texto, desplazamiento) { //Propiedad cifrar tiene los parámetros password y despla//
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   desplazamiento = (desplazamiento % 26 + 26) %26; //fórmula cipher para desplazarse, 26 letras del alfabeto
  return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+desplazamiento)%26]);    
}  

export default cipher;

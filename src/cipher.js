const cipher = {
  
  cifrar:(texto, desplazamiento) =>{ //propiedad cifrar tiene los parámetros texto y despla//
    if (!texto) //!not texto, si no hay texto, retorna nada//
    return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 + 26) %26; //fórmula cipher para desplazarse, 26 letras del alfabeto
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+desplazamiento)%26]); //i= no distingue ni lower ni uppercase, g=busca todas las coincidencias)
},  // función flecha => alternativa compacta a una expresión de función 
// IndexOf retorna el primer índice que se puede encontrar en un elemento dado //

}

export default cipher;



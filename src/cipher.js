const cipher = {
  
  cifrar:(texto, desplazamiento) =>{ //propiedad cifrar tiene los parámetros texto y despla//
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 + 26) %26; //fórmula cipher para desplazarse, 26 letras del alfabeto
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+desplazamiento)%26]);    
}
}
//se toman todas las coincidencias en texto.replace de la A-Z
/*se le aplica la función de la c, indexOf saca la posición de cada letra del array letras y se suma desplz
retornado el valor con el despl. modificado*/

//i= no distingue ni lower ni uppercase, g=busca todas las coincidencias
// función flecha => alternativa compacta a una expresión de función 
// IndexOf retorna el primer índice que se puede encontrar en un elemento dado //

export default cipher;



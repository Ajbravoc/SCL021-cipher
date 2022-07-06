import cipher from './cipher.js';

 const parrafo_primero = document.querySelector("#Description p.primero");
parrafo_primero.style.color = "dark-gray";


window.addEventListener("load", inicio, true);
function inicio(){
    document.getElementById("message").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    });
}

document.getElementById("encode").addEventListener("click", function(){
    let texto = document.getElementById("message").value;
    const desplazamiento = document.getElementById("desplazamiento").value;
    document.getElementById("mensaje2").value = cifrar(texto, desplazamiento);
}, true);

document.getElementById("decode").addEventListener("click", function(){
    let texto = document.getElementById("message").value;
    let desplazamiento = document.getElementById("desplazamiento").value = descifrar(texto,desplazamiento);
},true);

function cifrar(texto,desplazamiento){
let resultado = "";
let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

desplazamiento=(desplazamiento % 26 + 26) % 26;

if (texto){
    for (let i = 0; i<texto.length; i++){
        if (letras.indexOf(texto[i])!=-1){
            let posicion = ((letras.indexOf(texto[i])+desplazamiento)%26);
            resultado += letras[posicion];
        }
        else
        resultado += texto [i];
    }
}
return resultado;
}

function cifrar2 (texto,desplazamiento){
    if (!texto)
    return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    return texto.replace (/[A-Z]/ig, c=> [(letras.indexOf(c)+desplazamiento)%26]);

}

console.log(cipher);
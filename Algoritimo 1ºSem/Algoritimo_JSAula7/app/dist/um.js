"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function converter(entrada) {
    const textos = entrada.split(",");
    const nros = [];
    for (let i = 0; i < textos.length; i++) {
        nros[i] = parseInt(textos[i]);
    }
    return nros;
}
const teste = "30,60,50,10,20,40";
const resposta = converter(teste);
console.log(resposta);

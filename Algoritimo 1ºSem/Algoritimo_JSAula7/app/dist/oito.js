"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiplo(elementos, numero1, numero2) {
    const itens = [];
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i] % numero1 === 0 || elementos[i] % numero2 === 0) {
            itens.push(elementos[i]);
        }
    }
    return itens;
}
const nros = [21, 12, 18, 15, 28, 19, 23, 14];
const resultado = multiplo(nros, 3, 4);
console.log(resultado);

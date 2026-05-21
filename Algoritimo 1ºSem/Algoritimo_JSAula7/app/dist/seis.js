"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pares(elementos) {
    const itens = [];
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i] % 2 === 0) {
            itens.push(elementos[i]);
        }
    }
    return itens;
}
const nros = [21, 12, 18, 15, 28, 19, 23, 14];
const resultado = pares(nros);
console.log(resultado);

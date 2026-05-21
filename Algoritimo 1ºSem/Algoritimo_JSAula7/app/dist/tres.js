"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function aleatorio(quantidade) {
    const itens = [];
    for (let i = 0; i <= quantidade; i++) {
        itens[i] = Math.floor(Math.random() * 100);
    }
    return itens;
}
const nros = aleatorio(10);
console.log(nros);

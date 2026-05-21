"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function aleatorio(quantidade, min, max) {
    const itens = [];
    const intervalo = max - min;
    for (let i = 0; i <= quantidade; i++) {
        itens[i] = Math.floor(Math.random() * intervalo) + min;
    }
    return itens.sort();
}
// gerar 10 números aleatórios no intervalo [40,69]
const nros = aleatorio(20, 40, 70);
console.log(nros);

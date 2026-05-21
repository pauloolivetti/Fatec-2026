"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compactarTexto(texto) {
    if (texto.length == 0) {
        return "";
    }
    let resultado = "";
    let caractereAtual = texto[0];
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == caractereAtual) {
            contador = contador + 1;
        }
        else {
            resultado = resultado + caractereAtual + contador;
            caractereAtual = texto[i];
            contador = 1;
        }
    }
    resultado = resultado + caractereAtual + contador;
    return resultado;
}
const textos = [
    "aaabbcdddd",
    "aaaaa",
    "abc",
    "",
    "xxxyyyzzzz",
    "AABBCCCC",
];
for (const texto of textos) {
    const compactado = compactarTexto(texto);
    console.log(`Texto original: "${texto}"`);
    console.log(`Texto compactado: "${compactado}"`);
    console.log("-----------------------------");
}
//# sourceMappingURL=atividade10.js.map
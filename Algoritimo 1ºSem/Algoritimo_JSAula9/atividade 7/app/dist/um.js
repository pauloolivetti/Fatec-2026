"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function normalizarTexto(texto) {
    const textoMinuscula = texto.toLowerCase();
    const textoSemAcentos = textoMinuscula.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const textoSemEspacos = textoSemAcentos.replace(/\s/g, "");
    const textoSemPontuacao = textoSemEspacos.replace(/[^0-9a-z]/g, "");
    return textoSemPontuacao;
}
// Casos de teste
const frases = [
    "A grama é amarga",
    "Roma me tem amor",
    "Socorram-me subi no ônibus em Marrocos",
    "TypeScript é legal",
    "Ana"
];
for (const frase of frases) {
    console.log(normalizarTexto(frase));
}
/*
for (const frase of frases) {
    const resultado = ehPalindromo(frase);

    console.log(`Frase: "${frase}"`);

    if (resultado) {
        console.log("Resultado: É um palíndromo");
    } else {
        console.log("Resultado: Não é um palíndromo");
    }

    console.log("-----------------------------");
}*/ 
//# sourceMappingURL=um.js.map
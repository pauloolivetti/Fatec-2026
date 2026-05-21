"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function limparCPF(cpf) {
    return cpf.replace(/[^\d]/g, "");
}
function validarCPF(cpf) {
    const cpfLimpo = limparCPF(cpf);
    if (cpfLimpo.length != 11) {
        return false;
    }
    if (cpfTemTodosDigitosIguais(cpfLimpo)) {
        return false;
    }
    return true;
}
function cpfTemTodosDigitosIguais(cpf) {
    const primeiro = cpf[0];
    for (const caractere of cpf) {
        if (caractere != primeiro) {
            return false;
        }
    }
    return true;
}
const cpfs = [
    "123.456.789-10",
    "111.111.111-11",
    "12345678910",
    "123.456.789",
    "123.456.789-AA",
    "00000000000",
    "987.654.321-00",
];
for (const cpf of cpfs) {
    const resultado = validarCPF(cpf);
    console.log(`CPF: ${cpf}`);
    if (resultado) {
        console.log("Resultado: CPF válido no formato simplificado");
    }
    else {
        console.log("Resultado: CPF inválido");
    }
    console.log("-----------------------------");
}
//# sourceMappingURL=atividade7.js.map
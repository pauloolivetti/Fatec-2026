"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function analisarSenha(senha) {
    let pontuacao = 0;
    if (senha.length >= 8) {
        pontuacao += 1;
    }
    if (/[A-Z]/.test(senha)) {
        pontuacao += 1;
    }
    if (/[a-z]/.test(senha)) {
        pontuacao += 1;
    }
    if (/[0-9]/.test(senha)) {
        pontuacao += 1;
    }
    if (/[^a-zA-Z0-9]/.test(senha)) {
        pontuacao += 1;
    }
    let classificacao = "";
    if (pontuacao <= 2) {
        classificacao = "fraca";
    }
    else if (pontuacao == 3) {
        classificacao = "média";
    }
    else if ((pontuacao == 4)) {
        classificacao = "forte";
    }
    else {
        classificacao = "muito forte";
    }
    return { pontuacao, classificacao };
}
const senhas = [
    "abc",
    "abcdefghi",
    "Abcdefghi",
    "Abc12345",
    "Abc123@#",
];
for (const senha of senhas) {
    const resultado = analisarSenha(senha);
    console.log(`Senha: ${senha}`);
    console.log(`Pontuação: ${resultado.pontuacao}`);
    console.log(`classificacao: ${resultado.classificacao}`);
    console.log("-----------------------------");
}
//# sourceMappingURL=atividade2.js.map
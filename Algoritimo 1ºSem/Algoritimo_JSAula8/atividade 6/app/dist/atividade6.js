"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ordenarRanking(jogadores) {
    for (let i = 0; i <= jogadores.length - 2; i++) {
        for (let j = i + 1; j <= jogadores.length - 1; j++) {
            let a = jogadores[j]?.pontuacao;
            let b = jogadores[i]?.pontuacao;
            if (a > b) {
                const temp = jogadores[j];
                jogadores[j] = jogadores[i];
                jogadores[i] = temp;
            }
        }
    }
    return jogadores;
}
function exibirRanking(jogadores) {
    const ranking = ordenarRanking(jogadores);
    for (let i = 0; i < ranking.length; i++) {
        console.log(i + 1, ranking[i]?.nome, ranking[i]?.pontuacao);
    }
}
function buscarCampeao(jogadores) {
    const ranking = ordenarRanking(jogadores);
    return ranking[0];
}
// Casos de teste
const jogadores = [
    {
        nome: "Luna",
        pontuacao: 8500,
        fase: 12
    },
    {
        nome: "Caio",
        pontuacao: 7300,
        fase: 10
    },
    {
        nome: "Maya",
        pontuacao: 9200,
        fase: 14
    },
    {
        nome: "Ravi",
        pontuacao: 6800,
        fase: 9
    },
    {
        nome: "Nina",
        pontuacao: 9200,
        fase: 13
    }
];
exibirRanking(jogadores);
const campeao = buscarCampeao(jogadores);
if (campeao !== null) {
    console.log(`Campeão: ${campeao.nome}`);
    console.log(`Pontuação: ${campeao.pontuacao}`);
}
else {
    console.log("Não há jogadores cadastrados.");
}
//# sourceMappingURL=atividade6.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function listarPendentes(missoes) {
    for (let i = 0; i < missoes.length; i++) {
        if (missoes[i].status === "pendente") {
            console.log(missoes[i].titulo);
        }
    }
}
function calcularRecompensaConcluida(missoes) {
    let total = 0;
    for (let i = 0; i < missoes.length; i++) {
        if (missoes[i].status === "concluída") {
            total = total + missoes[i].recompensa;
        }
    }
    return total;
}
function alterarStatus(missoes, titulo, novoStatus) {
    for (let i = 0; i < missoes.length; i++) {
        if (missoes[i]?.titulo === titulo) {
            missoes[i].status = novoStatus;
            return true;
        }
        return false;
    }
}
// Casos de teste:
const missoes = [
    {
        titulo: "Resgatar o ferreiro da vila",
        dificuldade: 3,
        recompensa: 120,
        status: "pendente"
    },
    {
        titulo: "Derrotar o dragão da montanha",
        dificuldade: 10,
        recompensa: 1000,
        status: "em andamento"
    },
    {
        titulo: "Encontrar a relíquia perdida",
        dificuldade: 7,
        recompensa: 500,
        status: "concluída"
    },
    {
        titulo: "Escoltar o mercador",
        dificuldade: 4,
        recompensa: 200,
        status: "pendente"
    },
    {
        titulo: "Explorar as ruínas antigas",
        dificuldade: 6,
        recompensa: 350,
        status: "concluída"
    }
];
listarPendentes(missoes);
const recompensaTotal = calcularRecompensaConcluida(missoes);
console.log(`Recompensa total das missões concluídas: ${recompensaTotal} moedas`);
console.log("-----------------------------");
const alterou = alterarStatus(missoes, "Resgatar o ferreiro da vila", "concluída");
if (alterou) {
    console.log("Status da missão alterado com sucesso.");
}
else {
    console.log("Missão não encontrada.");
}
console.log("-----------------------------");
listarPendentes(missoes);
const novaRecompensaTotal = calcularRecompensaConcluida(missoes);
console.log(`Nova recompensa total das missões concluídas: ${novaRecompensaTotal} moedas`);
//# sourceMappingURL=atividade9.js.map
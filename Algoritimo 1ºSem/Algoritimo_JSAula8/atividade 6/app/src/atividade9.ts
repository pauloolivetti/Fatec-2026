type StatusMissao = "pendente" | "em andamento" | "concluída";

type Missao = {
    titulo: string,
    dificuldade: number,
    recompensa: number,
    status: StatusMissao
};

function listarPendentes(missoes: Missao[]){
    for( let i = 0; i < missoes.length; i++){
        if(missoes[i]!.status === "pendente"){
            console.log(missoes[i]!.titulo as string);
        }
} 
}

function calcularRecompensaConcluida(missoes: Missao[]){
    let total = 0;
    for (let i=0; i< missoes.length; i++){
        if(missoes[i]!.status === "concluída"){
            total = total + missoes[i]!.recompensa as number;
        }
}
return total as number;
}

function alterarStatus(missoes: Missao[], titulo: string, novoStatus: StatusMissao){
    for (let i = 0; i< missoes.length; i++){
    if (missoes[i]?.titulo === titulo){
        missoes[i]!.status = novoStatus
        return true
    } 
    return false
}
}

// Casos de teste:
const missoes: Missao[] = [
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
const alterou = alterarStatus(
missoes,
"Resgatar o ferreiro da vila",
"concluída"
);
if (alterou) {
console.log("Status da missão alterado com sucesso.");
} else {
console.log("Missão não encontrada.");
}
console.log("-----------------------------");
listarPendentes(missoes);
const novaRecompensaTotal = calcularRecompensaConcluida(missoes);
console.log(`Nova recompensa total das missões concluídas: ${novaRecompensaTotal} moedas`);
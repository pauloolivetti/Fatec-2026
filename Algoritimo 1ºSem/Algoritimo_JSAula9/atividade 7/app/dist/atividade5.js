"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function adicionarTarefa(lista, descricao, prioridade) {
    let novaTarefa = {
        descricao: descricao,
        prioridade: prioridade,
        status: "pendente"
    };
    lista.push(novaTarefa);
}
function concluirTarefa(lista, indice) {
    if (indice < 0 || indice >= lista.length) {
        return false;
    }
    lista[indice].status = "concluída";
    return true;
}
function listarTarefas(lista) {
    if (lista.length == 0) {
        console.log("Nenhuma tarefa cadastrada.");
        return;
    }
    for (let i = 0; i < lista.length - 1; i++) {
        console.log("Índice:", i);
        console.log("Descrição:", lista[i].descricao);
        console.log("Prioridade:", lista[i].prioridade);
        console.log("Status:", lista[i].status);
    }
}
function listarPendentes(lista) {
    let encontrou = false;
    for (const tarefa of lista) {
        if (tarefa.status = "pendente") {
            console.log(tarefa.descricao);
            console.log(tarefa.prioridade);
            encontrou = true;
        }
    }
    if (encontrou = false) {
        console.log("Nenhuma tarefa pendente");
    }
}
function buscarTarefa(lista, palavra) {
    let resultado = [];
    let palavraBuscada = palavra.toLowerCase();
    for (const tarefa of lista) {
        let descricaoMinuscula = tarefa.descricao.toLowerCase();
        if (descricaoMinuscula.includes(palavraBuscada)) {
            resultado.push(tarefa);
        }
    }
    return resultado;
}
// Casos de teste:
const tarefas = [];
adicionarTarefa(tarefas, "Estudar TypeScript", 5);
adicionarTarefa(tarefas, "Resolver exercícios de algoritmos", 4);
adicionarTarefa(tarefas, "Preparar aula de programação", 3);
listarTarefas(tarefas);
concluirTarefa(tarefas, 1);
console.log("-----------------------------");
listarPendentes(tarefas);
console.log("-----------------------------");
const resultadoBusca = buscarTarefa(tarefas, "TypeScript");
console.log("Resultado da busca");
console.log("-----------------------------");
for (const tarefa of resultadoBusca) {
    console.log(tarefa.descricao);
}
//# sourceMappingURL=atividade5.js.map
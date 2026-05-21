type StatusTarefa = "pendente" | "concluída"

type Tarefa = {
    descricao: string
    prioridade: number
    status: StatusTarefa
}

function adicionarTarefa(lista: Tarefa[], descricao: string, prioridade: number) {
    let novaTarefa: Tarefa ={
    descricao: descricao,
    prioridade: prioridade,
    status: "pendente"
    }
    lista.push(novaTarefa)
}

function concluirTarefa(lista: Tarefa[], indice: number) {
    if(indice < 0 || indice >= lista.length) {
        return false
    }
    lista[indice]!.status = "concluída"
    return true
}

function listarTarefas(lista: Tarefa[]) {
    if (lista.length == 0) {
        console.log("Nenhuma tarefa cadastrada.")
        return
    }
    for (let i = 0; i < lista.length - 1; i++) {
        console.log("Índice:", i)
        console.log("Descrição:", lista[i]!.descricao)
        console.log("Prioridade:", lista[i]!.prioridade)
        console.log("Status:", lista[i]!.status)
    }
}

function listarPendentes (lista: Tarefa[]) {
    let encontrou = false

    for(const tarefa of lista) {
        if (tarefa.status = "pendente") {
            console.log(tarefa.descricao)
            console.log(tarefa.prioridade)
            encontrou = true
        }
    }
    if (encontrou = false) {
        console.log("Nenhuma tarefa pendente")
    }
}

function buscarTarefa(lista: Tarefa[], palavra: string) {
    let resultado = []
    let palavraBuscada = palavra.toLowerCase()
    for (const tarefa of lista) {
        let descricaoMinuscula = tarefa.descricao.toLowerCase()
        if (descricaoMinuscula.includes(palavraBuscada)) {
            resultado.push(tarefa)
        }
    }
    return resultado
}


// Casos de teste:
const tarefas: Tarefa[] = [];
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
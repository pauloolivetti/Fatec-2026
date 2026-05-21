"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function adicionarPessoa(fila, nome) {
    fila.push(nome);
}
function atenderPessoa(fila) {
    if (fila.length === 0) {
        console.log("Não há pessoas na fila");
        return null;
    }
    let pessoaAtendida = fila.shift();
    return pessoaAtendida;
}
function listarFila(fila) {
    if ((fila.length === 0)) {
        console.log("Fila vazia");
    }
    else {
        for (let i = 0; (i < fila.length); i++) {
            console.log(i + 1, fila[i]);
        }
    }
}
const filaAtendimento = [];
adicionarPessoa(filaAtendimento, "Ana");
adicionarPessoa(filaAtendimento, "Bruno");
adicionarPessoa(filaAtendimento, "Carla");
adicionarPessoa(filaAtendimento, "Diego");
listarFila(filaAtendimento);
console.log("-----------------------------");
const primeiraPessoaAtendida = atenderPessoa(filaAtendimento);
if (primeiraPessoaAtendida !== null) {
    console.log(`Pessoa atendida: ${primeiraPessoaAtendida}`);
}
else {
    console.log("Não há pessoas na fila para atendimento.");
}
console.log("-----------------------------");
listarFila(filaAtendimento);
console.log("-----------------------------");
//# sourceMappingURL=atividade4.js.map
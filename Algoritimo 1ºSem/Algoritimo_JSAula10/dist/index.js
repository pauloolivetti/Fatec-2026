import promptSync from "prompt-sync";
const prompt = promptSync();
const filaNormal = [];
const filaPreferencial = [];
let proximoAtendimentoPreferencial = false;
let opcao = 1;
while (opcao !== 0) {
    console.log("\n=== Gerenciador de filas ===\n1 - Cadastrar cliente\n2 - Atender cliente\n3 - Listar filas\n0 - Sair");
    opcao = Number(prompt("Opção: "));
    if (opcao === 1) {
        criarCliente();
    }
    else if (opcao === 2) {
        atenderCliente();
    }
    else if (opcao === 3) {
        exibirFilas();
    }
    else if (opcao === 0) {
        console.log("Sistema encerrado");
    }
    else {
        console.log("Opção inválida.");
    }
}
function criarCliente() {
    const nome = prompt("Entre com o seu nome: ");
    const idade = Number(prompt("Entre com a sua idade: "));
    const gestante = prompt("Gestante (s/n): ");
    const cliente = {
        nome: nome.trim(),
        idade: idade,
        gestante: gestante.toLowerCase().trim() == 's' ? true : false
    };
    if (idade >= 60 || gestante == 's') {
        filaPreferencial.push(cliente);
        console.log("Você está na fila preferencial");
    }
    else {
        filaNormal.push(cliente);
        console.log("Você está na fila normal");
    }
}
function atenderCliente() {
    if (filaNormal.length === 0 && filaPreferencial.length === 0) {
        console.log("Não há clientes na fila.");
    }
    else {
        if (filaNormal.length === 0) {
            let clienteAtendido = filaPreferencial.shift();
            proximoAtendimentoPreferencial = false;
            console.log(`Cliente atendido: ${clienteAtendido?.nome}`);
        }
        else if (filaPreferencial.length === 0) {
            let clienteAtendido = filaNormal.shift();
            proximoAtendimentoPreferencial = true;
            console.log(`Cliente atendido: ${clienteAtendido?.nome}`);
        }
        else {
            if (proximoAtendimentoPreferencial) {
                let clienteAtendido = filaPreferencial.shift();
                proximoAtendimentoPreferencial = false;
                console.log(`Cliente atendido: ${clienteAtendido}`);
            }
            else {
                let clienteAtendido = filaNormal.shift();
                proximoAtendimentoPreferencial = true;
                console.log(`Cliente atendido: ${clienteAtendido}`);
            }
        }
    }
}
function exibirFilas() {
    console.log("Clientes da fila normal:");
    for (let i = 0; i < filaNormal.length; i++) {
        console.log(`Cliente ${i + 1}: ${filaNormal[i]?.nome}`);
    }
    console.log("Clientes da fila preferencial: ");
    for (let i = 0; i < filaPreferencial.length; i++) {
        console.log(`Cliente ${i + 1}: ${filaPreferencial[i]?.nome}`);
    }
}
//# sourceMappingURL=index.js.map
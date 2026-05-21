"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function inicializarHistorico() {
    let historico = { paginas: [] };
    return historico;
}
function historicoVazio(historico) {
    if (historico.paginas.length == 0) {
        return true;
    }
    else {
        return false;
    }
}
function visitarPagina(historico, pagina) {
    historico.paginas.push(pagina);
    console.log(`Página visitada: ${pagina}`);
}
function voltarPagina(historico) {
    if (historicoVazio(historico)) {
        console.log("Nenhuma página no histórico.");
        return null;
    }
    let paginaRemovida = historico.paginas.pop();
    if (paginaRemovida) {
        console.log(`Voltando da página: ${paginaRemovida}`);
        return paginaRemovida;
    }
    return null;
}
function paginaAtual(historico) {
    if (historicoVazio(historico)) {
        return "Nenhuma página aberta";
    }
    return historico.paginas[historico.paginas.length - 1];
}
function listarHistorico(historico) {
    if (historicoVazio(historico)) {
        console.log("Histórico vazio");
        return;
    }
    console.log("Histórico de navegação:");
    for (let i = historico.paginas.length - 1; i >= 0; i--) {
        console.log(historico.paginas[i]);
    }
}
const historico = inicializarHistorico();
visitarPagina(historico, "fatecjacarei.cps.sp.gov.br/");
visitarPagina(historico, "www.cps.sp.gov.br/etecs/etec-conego-jose-bento");
visitarPagina(historico, "siga.cps.sp.gov.br/fatec/defaultt.html");
visitarPagina(historico, "www.stackoverflow.com");
console.log("-----------------------------");
console.log(`Página atual: ${paginaAtual(historico)}`);
console.log("-----------------------------");
listarHistorico(historico);
console.log("-----------------------------");
voltarPagina(historico);
console.log("-----------------------------");
console.log(`Página atual após voltar: ${paginaAtual(historico)}`);
console.log("-----------------------------");
listarHistorico(historico);
//# sourceMappingURL=atividade4.js.map
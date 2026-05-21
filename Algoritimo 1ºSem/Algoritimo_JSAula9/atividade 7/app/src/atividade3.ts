type StatusMensagem = "não analisada" | "suspeita" | "segura";

type Mensagem = {
  remetente: string;
  conteudo: string;
  nivelSuspeita: number;
  status: StatusMensagem;
}

function cadastrarMensagem(
  mensagens: Mensagem[],
  remetente: string,
  conteudo: string
): void {
  const novaMensagem: Mensagem = {
    remetente,
    conteudo,
    nivelSuspeita: 0,
    status: "não analisada",
  };

  mensagens.push(novaMensagem);
}


function normalizarTexto(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD") 
    .replace(/[\u0300-\u036f]/g, "") 
    .replace(/[^\w\s]/g, ""); 
}


function separarPalavras(texto: string): string[] {
  let textoNormalizado = normalizarTexto(texto).trim();

  if (textoNormalizado.length === 0) {
    return [];
  }

  return textoNormalizado.split(/\s+/);
}


function contarPalavrasProibidas(
  conteudo: string,
  palavrasProibidas: string[]
): number {
  const palavrasMensagem = separarPalavras(conteudo);

  let contador = 0;

  for (const palavra of palavrasMensagem) {
    for (const proibida of palavrasProibidas) {
      const palavraProibidaNormalizada = normalizarTexto(proibida);

      if (palavra === palavraProibidaNormalizada) {
        contador++;
      }
    }
  }

  return contador;
}

function classificarMensagem(
  mensagem: Mensagem,
  palavrasProibidas: string[]
): void {
  const quantidade = contarPalavrasProibidas(
    mensagem.conteudo,
    palavrasProibidas
  );

  mensagem.nivelSuspeita = quantidade;

  if (quantidade >= 3) {
    mensagem.status = "suspeita";
  } else {
    mensagem.status = "segura";
  }
}

function analisarTodasMensagens(
  mensagens: Mensagem[],
  palavrasProibidas: string[]
): void {
  for (const mensagem of mensagens) {
    classificarMensagem(mensagem, palavrasProibidas);
  }
}

function listarMensagensSuspeitas(mensagens: Mensagem[]): void {
  console.log("Mensagens suspeitas");

  let encontrouSuspeita = false;

  for (const mensagem of mensagens) {
    if (mensagem.status === "suspeita") {
      console.log("Remetente:", mensagem.remetente);
      console.log("Conteúdo:", mensagem.conteudo);
      console.log("Nível de suspeita:", mensagem.nivelSuspeita);
      console.log("---------------------------");

      encontrouSuspeita = true;
    }
  }

  if (!encontrouSuspeita) {
    console.log("Nenhuma mensagem suspeita encontrada.");
  }
}

function buscarPorRemetente(
  mensagens: Mensagem[],
  remetente: string
): Mensagem[] {
  const resultado: Mensagem[] = [];

  const remetenteBuscado = remetente.toLowerCase();

  for (const mensagem of mensagens) {
    const remetenteMensagem = mensagem.remetente.toLowerCase();

    if (remetenteMensagem === remetenteBuscado) {
      resultado.push(mensagem);
    }
  }

  return resultado;
}

function listarMensagens(mensagens: Mensagem[]): void {
  console.log("Todas as mensagens");

  for (const mensagem of mensagens) {
    console.log("Remetente:", mensagem.remetente);
    console.log("Conteúdo:", mensagem.conteudo);
    console.log("Nível de suspeita:", mensagem.nivelSuspeita);
    console.log("Status:", mensagem.status);
    console.log("---------------------------");
  }
}


// Casos de teste:
const palavrasProibidas: string[] = [
"ataque",
"senha",
"invasao",
"roubo",
"fraude",
"virus",
"malware"
];
const mensagens: Mensagem[] = [];
cadastrarMensagem(
mensagens,
"Carlos",
"Olá, preciso recuperar minha senha."
);
cadastrarMensagem(
mensagens,
"Marina",
"Detectamos uma tentativa de ataque com malware e possível invasão."
);
cadastrarMensagem(
mensagens,
"Roberto",
"A reunião será amanhã às 14h."
);
cadastrarMensagem(
mensagens,
"Carlos",
"Houve suspeita de fraude, roubo de senha e instalação de vírus."
);
analisarTodasMensagens(mensagens, palavrasProibidas);
listarMensagens(mensagens);
listarMensagensSuspeitas(mensagens);
console.log("Busca por remetente: Carlos");
console.log("-----------------------------");
let mensagensCarlos = buscarPorRemetente(mensagens, "Carlos");
for (const mensagem of mensagensCarlos) {
console.log(`Conteúdo: ${mensagem.conteudo}`);
console.log(`Status: ${mensagem.status}`);
console.log(`Nível de suspeita: ${mensagem.nivelSuspeita}`);
console.log("-----------------------------");
}
type Estatisticas = {
  quantidadeCaracteres: number;
  quantidadePalavras: number;
  maiorPalavra: string;
  menorPalavra: string;
  quantidadeVogais: number;
  quantidadeConsoantes: number;
};

// Função para separar palavras
function separarPalavras(texto: string): string[] {
  // remover pontuação
  const textoLimpo = texto.replace(/[^\wÀ-ÿ\s]/g, "");

  // dividir texto por espaços
  const palavras = textoLimpo.split(/\s+/);

  // remover posições vazias
  return palavras.filter((palavra) => palavra.length > 0);
}

// Função para contar vogais
function contarVogais(texto: string): number {
  const vogais = "aeiouáéíóúâêîôûãõà";
  let contador = 0;

  for (const caractere of texto.toLowerCase()) {
    if (vogais.includes(caractere)) {
      contador++;
    }
  }

  return contador;
}

// Função para contar consoantes
function contarConsoantes(texto: string): number {
  const consoantes = "bcdfghjklmnpqrstvwxyz";
  let contador = 0;

  for (const caractere of texto.toLowerCase()) {
    if (consoantes.includes(caractere)) {
      contador++;
    }
  }

  return contador;
}

// Função para encontrar maior palavra
function encontrarMaiorPalavra(palavras: string[]): string {
  if (palavras.length === 0) {
    return "";
  }

  let maior = palavras[0];

  for (const palavra of palavras) {
    if (palavra.length > maior!.length) {
      maior = palavra;
    }
  }

  return maior!;
}

// Função para encontrar menor palavra
function encontrarMenorPalavra(palavras: string[]): string {
  if (palavras.length === 0) {
    return "";
  }

  let menor = palavras[0];

  for (const palavra of palavras) {
    if (palavra.length < menor!.length) {
      menor = palavra;
    }
  }

  return menor!;
}

// Função principal
function gerarEstatisticas(texto: string): Estatisticas {
  const palavras = separarPalavras(texto);

  return {
    quantidadeCaracteres: texto.length,
    quantidadePalavras: palavras.length,
    maiorPalavra: encontrarMaiorPalavra(palavras),
    menorPalavra: encontrarMenorPalavra(palavras),
    quantidadeVogais: contarVogais(texto),
    quantidadeConsoantes: contarConsoantes(texto),
  };
}

// Dados de teste
const textos: string[] = [
  "TypeScript é uma linguagem poderosa!",
  "A lógica de programação desenvolve o raciocínio.",
  "",
  "Olá, mundo!",
];

for (const texto of textos) {
  const estatisticas = gerarEstatisticas(texto);

  console.log(`Texto: "${texto}"`);
  console.log(`Quantidade de caracteres: ${estatisticas.quantidadeCaracteres}`);
  console.log(`Quantidade de palavras: ${estatisticas.quantidadePalavras}`);
  console.log(`Maior palavra: ${estatisticas.maiorPalavra}`);
  console.log(`Menor palavra: ${estatisticas.menorPalavra}`);
  console.log(`Quantidade de vogais: ${estatisticas.quantidadeVogais}`);
  console.log(`Quantidade de consoantes: ${estatisticas.quantidadeConsoantes}`);

  console.log("-----------------------------");
}

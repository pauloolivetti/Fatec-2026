type Criatura = {
  nome: string;
  tipo: string;
  nivelPerigo: number;
  habitat: string;
};

function listarCriaturas(criaturas: Criatura[]) {
  for (const criatura of criaturas) {
    console.log(
      `nome = ${criatura.nome}, tipo = ${criatura.tipo}, nivel de perigo = ${criatura.nivelPerigo}, habitat = ${criatura.habitat}`
    )
}
}

function buscarPorTipo(criaturas: Criatura[], tipo: string){
  let resultado: Criatura[] = []
  for (const criatura of criaturas) {
    if (criatura.tipo == tipo){
      resultado.push(criatura)
    }
  }
  return resultado
}

function encontrarMaisPerigosa(criaturas: Criatura[]){
  let maisPerigosa: Criatura = criaturas[0]!

  for (const criatura of criaturas) {
    if(criatura.nivelPerigo > maisPerigosa.nivelPerigo){
      maisPerigosa = criatura
    }
  }
  return maisPerigosa
}



// Dados de teste
const criaturas: Criatura[] = [
{
nome: "Dragão Rubro",
tipo: "Dragão",
nivelPerigo: 10,
habitat: "Montanhas Vulcânicas",
},
{
nome: "Sereia das Profundezas",
tipo: "Aquática",
nivelPerigo: 6,
habitat: "Oceano Abissal",
},
{
nome: "Grifo Dourado",
tipo: "Alado",
nivelPerigo: 7,
habitat: "Penhascos Altos",
},
{
nome: "Basilisco Sombrio",
tipo: "Réptil",
nivelPerigo: 9,
habitat: "Ruínas Antigas",
},
{
nome: "Dragão de Gelo",
tipo: "Dragão",
nivelPerigo: 8,
habitat: "Cordilheiras Congeladas",
},
];
// Casos de testes
listarCriaturas(criaturas);
console.log("\nBusca por tipo: Dragão");
const dragoes = buscarPorTipo(criaturas, "Dragão");
for (const criatura of dragoes) {
console.log(`${criatura.nome} - perigo ${criatura.nivelPerigo}`);
}

console.log("\nCriatura mais perigosa:");
const maisPerigosa = encontrarMaisPerigosa(criaturas);
if (maisPerigosa !== null) {
console.log(`${maisPerigosa.nome} - perigo ${maisPerigosa.nivelPerigo}`);
} else {
console.log("Nenhuma criatura cadastrada.");
}

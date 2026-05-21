type Jogador = {
    nome: string,
    pontuacao: number,
    fase: number
};

function ordenarRanking(jogadores: Jogador[]){
    for( let i = 0; i <= jogadores.length - 2; i++){
        for( let j = i+1; j <= jogadores.length-1; j++){
            let a = jogadores[j]?.pontuacao as number;
            let b = jogadores[i]?.pontuacao as number; 
            if( a > b ){
                const temp = jogadores[j];
                jogadores[j] = jogadores[i] as Jogador;
                jogadores[i] = temp as Jogador;
            }
        }
    }
    return jogadores;
}

function exibirRanking(jogadores:Jogador[]){
    const ranking = ordenarRanking(jogadores);

    for(let i = 0; i < ranking.length; i++){
        console.log(i+1, ranking[i]?.nome, ranking[i]?.pontuacao);
    }
}

function buscarCampeao(jogadores:Jogador[]){
    const ranking = ordenarRanking(jogadores);
    return ranking[0] as Jogador;
}

// Casos de teste
const jogadores: Jogador[] = [
    {
        nome: "Luna",
        pontuacao: 8500,
        fase: 12
    },
    {
        nome: "Caio",
        pontuacao: 7300,
        fase: 10
    },
    {
        nome: "Maya",
        pontuacao: 9200,
        fase: 14
    },
    {
        nome: "Ravi",
        pontuacao: 6800,
        fase: 9
    },
    {
        nome: "Nina",
        pontuacao: 9200,
        fase: 13
    }
];

exibirRanking(jogadores);

const campeao = buscarCampeao(jogadores);

if (campeao !== null) {
    console.log(`Campeão: ${campeao.nome}`);
    console.log(`Pontuação: ${campeao.pontuacao}`);
} else {
    console.log("Não há jogadores cadastrados.");
}
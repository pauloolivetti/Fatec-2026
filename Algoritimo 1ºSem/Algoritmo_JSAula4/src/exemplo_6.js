function somatorio( vetor ){
    i = 0;
    soma = 0;
    while( i < vetor.length ){
        soma = soma + vetor[i];
        i = i + 1;
    }
    return soma;
}

r = somatorio([2,8,5,3,4]);
console.log(`Resultado: ${r}`);

r = somatorio([3,5,1]);
console.log(`Resultado: ${r}`);
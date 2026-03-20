// importar a biblioteca
prompt = require("prompt-sync")();

// inicializando o array vazio
idades = [];

entrada = "a"; // inicializa a variável com "a"

// repetir enquanto entrada tiver uma string diferente de ""
while( entrada != "" ){
    entrada = prompt("Entre com a idade:");
    if( entrada != "" ){
        aux = parseInt(entrada);
        idades.push(aux);
    }
}
// percorre o array para imprimir
i = 0;
soma = 0;
while( i < idades.length ){
    soma = soma + idades[i];
    i = i + 1;
}

console.log(`Somatório: ${soma} e a Média é: ${soma / idades.length}`);

// importar a biblioteca
prompt = require("prompt-sync")();

// inicializando o array vazio
nomes = [];

entrada = "a"; // inicializa a variável com "a"

// repetir enquanto entrada tiver uma string diferente de ""
while( entrada != "" ){
    entrada = prompt("Entre com o nome:");
    if( entrada != "" ){
        nomes.push(entrada);
    }
}

i = 0;

while(i < nomes.length){
    console.log(nomes[i]);
    i += 1;
}


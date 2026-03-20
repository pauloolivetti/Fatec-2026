prompt = require("prompt-sync")();

entrada = prompt("Entre com seu nome: ");

i = 0

while(i < entrada.length){
    if(i % 2 == 0){
        console.log(entrada[i])
    }
    i = i + 1
}


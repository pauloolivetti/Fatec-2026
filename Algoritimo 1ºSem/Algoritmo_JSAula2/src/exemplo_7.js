prompt = require("prompt-sync")();

entrada = prompt("Entre com seu nome: ");

i = entrada.length - 1

while(i >= 0){
    console.log(entrada[i])
    i = i - 1 
}


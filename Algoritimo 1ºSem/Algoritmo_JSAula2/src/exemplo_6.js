prompt = require("prompt-sync")();

idadeString = prompt("Entre com um número: ");

limite = parseInt(idadeString)

i = 0

while(i < limite){
    if(i % 2 == 0){
        console.log(i)
    }
    i = i + 1
}

console.log("fim do laço")
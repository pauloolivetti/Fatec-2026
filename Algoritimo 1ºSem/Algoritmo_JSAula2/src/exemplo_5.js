prompt = require("prompt-sync")();

idadeString = prompt("Entre com um número: ");

limite = parseInt(idadeString)

i = 0

while(i < limite){
    console.log(i)
    i += 1
}

console.log("fim do laço")
prompt = require("prompt-sync")();

numero = parseInt(prompt("Entre com um número: "))

i = 1
fat = 1

while(i <= numero){
    fat = fat * i
    i += 1
}

console.log(`O vetorial do número ${numero} é: ${fat}`)
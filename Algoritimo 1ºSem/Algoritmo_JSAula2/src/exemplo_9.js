prompt = require("prompt-sync")();

i = 0

let lista = []

while(i < 4){
    entrada = prompt("Entre com seus nomes: ")
    lista.push(entrada)
    i = i + 1
}

console.log(lista)
prompt = require("prompt-sync")();

i = 0

lista = []

numb = parseInt(prompt("Passe o número de pessoas da lista"))

while(i < numb){
    entrada = prompt("Entre com seus nomes: ")
    lista.push(entrada)
    i = i + 1
}

i = 0

while(i < lista.length){
    console.log(lista[i])
    i += 1
}
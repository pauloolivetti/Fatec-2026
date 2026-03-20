prompt = require("prompt-sync")();

function letraUltima (nome){
    return nome[nome.length - 1]
}

entrada = prompt("Passe o seu nome: ")

ultimaLetra = letraUltima(entrada)

console.log(ultimaLetra)
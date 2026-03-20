prompt = require("prompt-sync")();

peso = parseFloat(prompt("Entre com seu peso corporal (Kg): "))

altura = parseFloat(prompt("Entre com a sua altura (m): "))

imc = peso / (altura**2)

console.log(`O seu IMC é: ${imc.toFixed(2)}`)
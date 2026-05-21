"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatar(entrada) {
    const textos = entrada.split(";");
    const obj = {
        logradouro: textos[0].trim(),
        bairro: textos[1].trim(),
        municipio: textos[2].trim(),
        uf: textos[3].trim(),
        cep: textos[4].trim()
    };
    return obj;
}
const endereco = "R. Faria Lima, 155; Jardim Santa Maria; Jacareí; SP; 12328-070";
const resposta = formatar(endereco);
console.log(resposta);

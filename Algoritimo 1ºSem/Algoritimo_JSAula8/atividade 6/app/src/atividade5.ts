function cifrarMensagem(mensagem:string, deslocamento:number):string{
    const alfabeto = "abcdefghijklmnopqrstuvwxyzA";
    let resultado = "";

    for( let i = 0; i < mensagem.length; i++ ){
        const caractere:string = mensagem[i] as string;
        const posicao = alfabeto.indexOf(caractere);
        if( posicao >= 0 ){
            const novaPosicao = (posicao + deslocamento) % 27;
            resultado = resultado + alfabeto[novaPosicao];
        } else {
            resultado = resultado + caractere;
        }
    }
    return resultado;
}


function decifrarMensagem(mensagem:string, deslocamento:number): string{
    return cifrarMensagem(mensagem, 27 - deslocamento);
}

// caso de teste
const mensagemOriginal = "ataque ao castelo";
const deslocamento = 3;

const mensagemCifrada = cifrarMensagem(mensagemOriginal, deslocamento);
const mensagemDecifrada = decifrarMensagem(mensagemCifrada, deslocamento);

console.log(`Mensagem original: ${mensagemOriginal}`);
console.log(`Mensagem cifrada: ${mensagemCifrada}`);
console.log(`Mensagem decifrada: ${mensagemDecifrada}`);

console.log("-----------------------------");

const outraMensagem = "Arley typescript 123!";
const outraCifrada = cifrarMensagem(outraMensagem, deslocamento);
const outraDecifrada = decifrarMensagem(outraCifrada, deslocamento);

console.log(`Mensagem original: ${outraMensagem}`);
console.log(`Mensagem cifrada: ${outraCifrada}`);
console.log(`Mensagem decifrada: ${outraDecifrada}`);
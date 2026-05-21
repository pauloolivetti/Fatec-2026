function contamultiplo(elementos:number[], numero1:number, numero2:number){
    const itens:number[] = [];
    for(let i = 0; i < elementos.length; i++){
        if( elementos[i]%numero1 === 0 || elementos[i]%numero2 === 0 ){
            itens.push(elementos[i]);
        }
    }
    return {quantidade: itens.length};
}

const nros = [21,12,18,15,28,19,23,14];
const resultado = contamultiplo(nros , 3, 4);
console.log(resultado);
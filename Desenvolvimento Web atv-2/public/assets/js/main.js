const input = document.getElementById("search-input");
const result = document.getElementById("result");

function showresult(message){
    result.textContent = message;
}

function handlecepSearch(){
    const rawCep = input.value.replace(/\D/g,""); 
}

    if( rawCep.length != 8 ){
        showresult("CEP inválido. Use 8 números (ex: 12345678 ou 12.328-070).");
    
    } 




input.addEventListener("keydown",function(event) {
    if (event.key == "Enter" ) {
        handlecepSearch();
    }
})









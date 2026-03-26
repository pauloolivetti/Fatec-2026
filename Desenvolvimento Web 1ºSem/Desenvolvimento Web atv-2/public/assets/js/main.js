const input = document.getElementById("search-input");
const result = document.getElementById("result");

function showresult(message, type){
    result.innerHTML = message;
    result.className = `result ${type}`;
}

async function handlecepSearch() {
    const rawCep = input.value.replace(/\D/g, "");

    if (rawCep.length !== 8) {
        showresult("CEP inválido. Use 8 números (ex: 12345678 ou 12.328-070).", "error");
     } else{                            
        showresult("consultando cep...", "loading");   
        const response = await fetch(`https://viacep.com.br/ws/${rawCep}/json/`);
        if ( !response.ok ) {
            showresult("falha no serviço", "error");
          } else{
            const data = await response.json();
            if (data.erro) {
                showresult("CEP não encontrado.", "error");
          } else {
            const message = `
            <p><strong>CEP:</strong> ${data.cep  || 'N/A'}</p>
            <p><strong>Logradouro:</strong> ${data.logradouro || 'N/A'}</p>
            <p><strong>Complemento:</strong> ${data.complemento || 'N/A'}</p>
            <p><strong>Bairro:</strong> ${data.bairro || 'N/A'}</p>
            <p><strong>Cidade:</strong> ${data.localidade || 'N/A'}</p>
            <p><strong>UF:</strong> ${data.uf || 'N/A'}</p>
            <p><strong>Estado:</strong> ${data.estado || 'N/A'}</p>
            <p><strong>Região:</strong> ${data.regiao || 'N/A'}</p>
            <p><strong>DDD:</strong> ${data.ddd || 'N/A'}</p>`;    

            showresult(message, "success")   
           }
        }
        }
    };
     
input.addEventListener("keydown",function(event){
    if (event.key == "Enter" ) {
        handlecepSearch();
    }
});

input.addEventListener("input", function(){
    if( input.value.trim() == "" ){
        result.innerHTML = "";
        result.className = "result";
    }
})
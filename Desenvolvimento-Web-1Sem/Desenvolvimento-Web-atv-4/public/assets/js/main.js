const senasInput = document.getElementById('senas-input')
const senasContainer = document.querySelector(".senas-article")
const result = document.getElementById("result");
const regex = (/\s+/g)

function showResult(message, type) {
  result.textContent = message;
  result.className = `result ${type}`;
}

function clearResult() {
  result.textContent = "";
  result.className = "result";
}

function renderEmptyTable(message) {
    senasContainer.innerHTML = `
    <span colspan="3" class="span-empty">${message}</span>
  `;
}

function renderBalls(dezenas){
    let ballsLi = ''
    for (let i = 0; i < dezenas.length; i++) {
        ballsLi += `<li class="senas-ball">${dezenas[i]}</li>`
    }
    return ballsLi
}

function renderSenas(senas) {
  if (senas.length == 0) {
    renderEmptyTable("Nenhuma mega-sena cadastrada");
  } else {
    let rowsTable = "";
    for (let i = 0; i < senas.length; i++) {
      const dezenas = senas[i].nros.split(" ")
      const balls = renderBalls(dezenas)
      rowsTable += `<ul class="senas-list">${balls}</ul>`;
    }
    senasContainer.innerHTML = rowsTable;
  }
}

async function addSenas() {
    const newSenas = senasInput.value.trim().replace(regex," ")
    if(newSenas.split(" ").length == 6 && newSenas.length == 17){
        showResult("Cadastrando jogo...","loading")
        const response = await fetch('/senas',{
            method: "POST", 
            headers: {"content-type": "application/json"},
            body: JSON.stringify({newSenas})
        })
        showResult("Jogo cadastrado com sucesso!","success")
    } else if (newSenas == ""){
        showResult("Cadastre sua sequência da sorte para prosseguir!",'error')
    } else{
        showResult("Digite 6 dezenas separadas por espaços!", "error")
    }
    loadSenas()
}

async function loadSenas() {
    const response = await fetch('/senas')
    if(response.ok){
        const senas = await response.json()
        renderSenas(senas)
    } else{
        renderEmptyTable('Problemas ao exibir senas')
    }
}

loadSenas()

senasInput.addEventListener('keydown', (event)=>{
    clearResult()    
    if(event.key == "Enter"){
        addSenas()
    }
})
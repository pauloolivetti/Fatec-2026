const nameInput = document.getElementById("user-input")
const emailInput = document.getElementById("email-input")
const usersTableBody = document.getElementById("users-table-body")
const result = document.getElementById("result");
const saveButton = document.getElementById("save-user")
const clearButton = document.getElementById("clear-user")

const emailRegex = (/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/)

function showResult(message, type) {
  result.textContent = message;
  result.className = `result ${type}`;
}

function clearForm(){
    nameInput.value = ""
    emailInput.value = ""
}

function renderEmptyTable(message) {
  usersTableBody.innerHTML = `
    <tr>
        <td colspan="3" class="user-table-empty">${message}</td>
    </tr>
  `;
}

async function deleteUser(id) {
  showResult("Excluindo registro...", "loading");
  const response = await fetch(`/users/${id}`, { method: "DELETE" });
  if (response.ok) {
    const users = await response.json();
    console.log(users);
    showResult("Usuário excluído com sucesso.", "success");
    await loadUsers();
  } else {
    showResult("Erro ao excluir usuário.", "error");
  }
}

function renderUsers(users) {
  if (users.length == 0) {
    renderEmptyTable("Nenhum usuário cadastrado");
  } else {
    usersTableBody.innerHTML = "";
    let rowsTemp = "";

    for (let i = 0; i < users.length; i++) {
      rowsTemp += `
        <tr>
            <td>${users[i].name}</td>
            <td>${users[i].email}</td>
<td class="user-table-actions-cell">
<button class="delete-user-button" onClick="deleteUser(${users[i].id_users})">
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path 
      d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v8h-2V9zm4 0h2v8h-2V9zm-7 0h2v8H7V9z m1 12a2 2 0 0 1-2-2V8h12v11a2 2 0 0 1-2 2H8z"
      fill="currentColor">
    </path>
  </svg>
</button>
</td>
        </tr>
      `;
    }

    usersTableBody.innerHTML = rowsTemp;
  }
}


async function createUser() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  if (name && emailRegex.test(email)) {
    showResult("Salvando usuário", "loading");
    const response = await fetch(`/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name,email}),
    });
    if (response.ok) {
      const user = await response.json();
      console.log(user);
      showResult("Usuário cadastrado com sucesso.", "success");
      clearForm()
      await loadUsers();
    } else {
      showResult("Erro ao cadastrar usuários.", "error");
    }
  } else if(!emailRegex.test(email) && name){
    showResult("Digite um e-mail válido!", "error")
  } else if(!name && email){
    showResult("Preencha o campo nome!","error")
  } else{
    showResult("Preencha o campo email e nome para prosseguir", "error")
  }
}

saveButton.addEventListener('click', ()=>{
    createUser()
})

clearButton.addEventListener('click', ()=>{
    clearForm()
})

async function loadUsers(){
    const response = await fetch("/users")
    if(response.ok){
        const users = await response.json()
        renderUsers(users)
    } else{
        renderEmptyTable("Problemas ao obter os usuários")
    }
}

loadUsers()

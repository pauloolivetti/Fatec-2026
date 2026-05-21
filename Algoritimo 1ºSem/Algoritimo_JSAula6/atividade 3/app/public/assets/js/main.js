const nameInput = document.getElementById("user-name");
const emailInput = document.getElementById("user-email");
const usersTabelBody = document.getElementById("users-table-body");
const result = document.getElementById("result");
const saveButton = document.getElementById("save-user");
const clearButton = document.getElementById("clear-user");

function showresult(message, type) {
    result.textContent = message;
    result.className = `result ${type}`;
}

function clearForm() {
    nameInput.value = "";
    emailInput.value = "";
}

function renderEmptyTable(message) {
    usersTabelBody.innerHTML = `
    <tr>
      <td colspan="3" class="user-table-empty"> ${message} </td>
    </tr>
  `;
}

async function deleteUser(Id) {
    showresult("Excluindo usuário...", "loading");
    const response = await fetch(`/users/${Id}`,{method: "DELETE"})
    if (response.ok) {
        const users = await response.json();
        console.log(users);
        showresult("Usuário excluído com sucesso!", "success");
        await loadUsers();
    } else {
        showresult("Erro ao excluir usuário", "error");
    }
}

function renderUsers(users) {
    if (users.length === 0) {
        renderEmptyTable("Nenhum usuário encontrado");
    } else {
        usersTabelBody.innerHTML = "";
        let rowsTemp = "";
        for (let i = 0; i < users.length; i++) {
            rowsTemp += `
            <tr>
                <td>${users[i].name}</td>
                <td>${users[i].email}</td>
                <td class="user-table-actions-cell" >
                    <button class="delete-user-button" onclick="deleteUser(${users[i].id_user})"> 
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
        usersTabelBody.innerHTML = rowsTemp;
    }
}

async function loadUsers() {
    const response = await fetch("/users")
    if (response.ok) {
        const users = await response.json();
        renderUsers(users);
    } else {
        renderEmptyTable("Erro ao carregar usuários");
    }
}

async function createUser() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    if (name && email) {
        showresult("salvando usuário...", "loading");
        const response = await fetch(`/users`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, email})
        });
        if (response.ok) {
            const user = await response.json();
            clearForm();
            showresult("Usuário salvo com sucesso!", "success");
            await loadUsers();
        } else {
            showresult("Erro ao salvar usuário", "error");
        }
    } else {
        showresult("Por favor, preencha todos os campos", "error");
    }
}

saveButton.addEventListener("click", async function(){
    await createUser();
});

clearButton.addEventListener("click", function(){
    clearForm();
});


loadUsers();
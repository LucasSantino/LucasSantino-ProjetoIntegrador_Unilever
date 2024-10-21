function login(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos
    const userType = document.getElementById("user-type").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.querySelector(".error-message");

    // Exemplo de validação (substitua pela lógica real de autenticação)
    if (username === "" || password === "") {
        errorMessage.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    // Lógica de autenticação simples (substitua pelos dados reais)
    if (userType === "admin" && username === "admin" && password === "1234") {
        alert("Login de Administrador bem-sucedido!");
        // Redirecionar para a página de administrador
    } else if (userType === "user" && username === "user" && password === "1234") {
        alert("Login de Usuário bem-sucedido!");
        // Redirecionar para a página de usuário
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos.";
    }
}

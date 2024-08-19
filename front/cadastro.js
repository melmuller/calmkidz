document.getElementById("cadastre").onclick = async function() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("emailCadastro").value;
    let senha = document.getElementById("senhaCadastro").value;
    let confirmarsenha = document.getElementById("confirmarSenha").value;
    
    // Verificação simples de senha
    if (senha !== confirmarsenha) {
        alert("As senhas não coincidem");
        return;
    }
    
    let data = { nome, email, senha, confirmarsenha };

    try {
        const response = await fetch('http://localhost:3003/api/user/create', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            alert("Cadastro realizado com sucesso!");
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error("Erro na solicitação:", error);
        alert("Ocorreu um erro ao realizar o cadastro.");
    }
};
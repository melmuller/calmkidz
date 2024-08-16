let button = document.getElementById("cadastre");

        button.onclick = async function() {
            let nome = document.getElementById("nome").value;
            let email = document.getElementById("email").value;
            let senha = document.getElementById("senha").value;
            let confirmarsenha = document.getElementById("confirmarsenha").value;
            
            let data = {nome, email, senha, confirmarsenha}

        const response = await fetch('http://localhost:3003/api/user/create',{
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
        })

        const result = await response.json();

        if(result.success) {
            alert("sucess")
        } else {
            alert(result.message);
        }
    }

    

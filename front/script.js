// Função assíncrona para enviar dados de login para o servidor e processar a resposta
async function getUser(data) {
  // Envia uma requisição POST para a API de login com os dados do usuário
  const response = await fetch('http://localhost:3003/api/login', {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data)
  });

  // Converte a resposta da API para JSON
  const result = await response.json();

  // Verifica se a resposta foi bem-sucedida
  if (result.success) {
      console.log(result.data);
      alert(result.message);
      // Redireciona para a página inicial após o login bem-sucedido
      window.location.href = "home.html";
  } else {
      // Exibe uma mensagem de erro se a resposta indicar falha
      alert(result.message);
  }
}

// Seleciona o botão de envio do formulário de login
let button = document.getElementById("handleSubmit");

// Adiciona um evento de clique ao botão
button.onclick = async function(event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário

  // Obtém os valores dos campos de entrada
  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;

  // Cria um objeto com os dados do usuário
  let data = {
      email,
      senha
  };

  // Chama a função getUser para processar o login
  getUser(data);
}

// Seleciona os formulários e o botão de cor para animação
var formSignin = document.querySelector('#signin');
var formSignup = document.querySelector('#signup');
var btnColor = document.querySelector('.btnColor');

// Adiciona um evento de clique ao botão de login
document.querySelector('#btnSignin')
.addEventListener('click', () => {
  formSignin.style.left = "25px"; // Move o formulário de login para a esquerda
  formSignup.style.left = "450px"; // Move o formulário de cadastro para a direita
  btnColor.style.left = "0px"; // Move o botão de cor para a posição inicial
});

// Adiciona um evento de clique ao botão de cadastro
document.querySelector('#btnSignup')
.addEventListener('click', () => {
  formSignin.style.left = "-450px"; // Move o formulário de login para a esquerda
  formSignup.style.left = "25px"; // Move o formulário de cadastro para a posição inicial
  btnColor.style.left = "110px"; // Move o botão de cor para a posição de cadastro
});
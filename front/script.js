import { setAccount } from './contaLogada.js';

const button = document.querySelector("#handleSubmit");

button.onclick = async function(event) {
  // Evita que a página recarregue ao clicar no botão
  event.preventDefault();
  let email = document.querySelector("#emailLogin").value;
  let senha = document.querySelector("#senhaLogin").value;
  
  // Faz uma requisição GET para obter os dados da conta
  const response = await fetch(`http://localhost:3003/api/login?email=${email}&senha=${senha}`, {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  });

  let content = await response.json();
  
  if (content.success) {
    // Salva o nome da conta no localStorage
    localStorage.setItem('contaLogada', content.data.nome)
    console.log();
    // Redireciona para a página inicial
    window.location.href = './home.html';
    alert(content.message);
  } else {
    alert(content.message);
  }
};

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


const blog = document.getElementById("blog-add")

let post1 = document.getElementById("post1")

// Linha que seleciona o elemento HTML com o ID blog-add e armazena na constante blog

async function buscandoPosts() {
  // GET
  const response = await fetch('http://localhost:3003/api/buscandoPosts', {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" }
  });

  let content = await response.json();
  console.log(content)
  
  for (let i = 0; i < content.data.length; i++) {
    post1.innerHTML += `

    <article class="container-1">
    <div class="coluna">
       
        <!-- Título do comentário -->
        <div class="avaliar-comentario">
            <h3 class="nome-comentario">${content.data[i].titulo}</h3>
        </div>
        <!-- Texto do comentário -->
        <div class="texto-comentario">
            <p>
              ${content.data[i].conteudo}
            </p>
        </div>
        <hr>
    </div>
    </article>
    `
  } 
};

// Verifica os conteúdos do banco e leva pro front

buscandoPosts();
// Chamando a função
function teste(){
    blog.style.display = 'block';
}


function teste2(){
  document.getElementById('text-message').innerText = 'teste2';
}

// Define o texto do elemento com ID text-message para 'teste2'.

let button = document.getElementById("handleSubmit");

button.onclick = async function(event) {
  event.preventDefault();

  let title = document.querySelector("#title").value;
  let blog = document.querySelector("#campo-blog").value;


  let data = {
    title,
    blog
  };
  // Define valores pra botar no banco
  try {
    const response = await fetch('http://localhost:3003/api/store/task', {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data)
    });

    let content = await response.json();

    if (content.success) {
      window.location.reload();
      alert(content.message);

    } else {
      alert(content.message);
    }
  } catch (error) {
    alert('Falha ao conectar com o servidor.');
  }
};

// Tentar enviar pro front e se der erro apresenta essa mwensagem
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
  console.log(content);
  let nomeUsuario = localStorage.getItem('contaLogada');
  console.log(nomeUsuario);
  for (let i = 0; i < content.data.length; i++) {
    if(nomeUsuario === content.data[i].nomeUser){
    post1.innerHTML += `

    <article class="container-1">
    <div class="coluna">

        <!-- Nome do Usuário -->

        <div>
            <h1 class="nome-user">${content.data[i].nomeUser}</h1>
        </div>
       
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
        <div class="bloco_botoes">
          <button class="botaod" onclick="deletarpost(${content.data[i].id})"> Excluir </button>
          <button class="botaoe" onclick="editarPost(${content.data[i].id})"> Editar </button>
        </div>
        <hr>
    </div>
    </article>
    `
  } else {
    post1.innerHTML += `

    <article class="container-1">
    <div class="coluna">

        <!-- Nome do Usuário -->

        <div>
            <h1 class="nome-user">${content.data[i].nomeUser}</h1>
        </div>
       
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
    </div>
    </article>
    `
  }}
};

// Verifica os conteúdos do banco e leva pro front

buscandoPosts();
// Chamando a função
function teste(){
    blog.style.display = 'block';
    carregarComentarios(content.data[i].id);
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

  // Obtém o nome do usuário do localStorage
  let nomeUsuario = localStorage.getItem('contaLogada');

  console.log(nomeUsuario);
  // Define os dados para enviar ao banco, incluindo o nome do usuário
  let data = {
    title,
    blog,
    nomeUsuario // Adiciona o nome do usuário aqui
  };
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

async function deletarpost(id) {

  try {
    const response = await fetch(`http://localhost:3003/api/delete/task/${id}`, {
      method: "DELETE"
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

async function editarPost(id) {
  let novoConteudo = prompt('Insira o novo conteúdo do post')
    const response = await fetch(`http://localhost:3003/api/put/task/${id}`, {
      method: "PUT", // Usando PUT para atualizar o recurso
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        conteudo: novoConteudo // Aqui você pode enviar qualquer dado que deseja atualizar
      })
    });

    let content = await response.json();

    if (content.success) {
      alert(content.message);
      // Se precisar atualizar a UI, pode ser feito aqui, por exemplo:
      // Atualizar o conteúdo do post na tela sem recarregar
    } else {
      alert(content.message);
    }

    async function carregarComentarios(postId) {
      const response = await fetch(`http://localhost:3003/api/fetchComments/${postId}`);
      const content = await response.json();
      const comentariosDiv = document.getElementById(`comentarios-post-${postId}`);
      comentariosDiv.innerHTML = "";
  
      content.data.forEach(comentario => {
          comentariosDiv.innerHTML += `
              <p><strong>${comentario.nomeUser}:</strong> ${comentario.conteudo}</p>
          `;
      });
  }

  async function adicionarComentario(postId) {
    const input = document.getElementById(`comentario-input-${postId}`);
    const conteudo = input.value.trim();
    const nomeUser = localStorage.getItem('contaLogada');

    if (!conteudo) {
        alert("O comentário não pode estar vazio.");
        return;
    }

    const response = await fetch('http://localhost:3003/api/store/comment', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify({ postId, nomeUser, conteudo })
    });

    const result = await response.json();
    if (result.success) {
        alert(result.message);
        carregarComentarios(postId);
        input.value = ""; // Limpa o campo
    } else {
        alert(result.message);
    }
}


  location.reload()
}


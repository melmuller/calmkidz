CREATE DATABASE calmkidz;

USE calmkidz;

CREATE TABLE usuario (
  id int auto_increment NOT NULL PRIMARY KEY,
  nome varchar(255) NOT NULL,
  email varchar(255) NOT NULL UNIQUE,
  senha varchar(255) NOT NULL,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE postagens (
  id int auto_increment NOT NULL PRIMARY KEY,
  titulo varchar(255) not null,
  conteudo longtext NOT NULL,
  nomeUser VARCHAR(255),
  data_postagem TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from usuario;
    
TRUNCATE TABLE postagens;
select * from postagens;

CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    postId INT NOT NULL, -- ID do post ao qual o comentário está associado
    nomeUser VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (postId) REFERENCES postagens(id) ON DELETE CASCADE
);

<div class="comentarios">
    <h4>Comentários</h4>
    <div id="comentarios-post-${postId}"></div>
    <textarea id="comentario-input-${postId}" placeholder="Adicione um comentário..."></textarea>
    <button onclick="adicionarComentario(${postId})">Enviar</button>
</div>

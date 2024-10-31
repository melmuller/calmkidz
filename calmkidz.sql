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

INSERT INTO usuario(nome, email, idade, senha) VALUES ("Gabriel","gabriel@gmail.com", "122");

SELECT nome, email, senha FROM usuario WHERE email = "gabriel@gmail.com";


delete from postagens
	WHERE id > 0;
    
TRUNCATE TABLE postagens;
select * from postagens;
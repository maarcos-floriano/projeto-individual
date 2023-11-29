DROP DATABASE escoteirosDoBrasil;

CREATE DATABASE escoteirosDoBrasil;

use escoteirosDoBrasil;

CREATE TABLE usuarios (
idUsuario int PRIMARY KEY auto_increment,
usr_nome VARCHAR(45),
usr_registro CHAR(6) NOT NULL UNIQUE,
usr_email VARCHAR(255) NOT NULL,
usr_senha VARCHAR(255) NOT NULL,
usr_patrulha int NOT NULL
)auto_increment=100;

CREATE table patrulhas (
	idPatrulha int PRIMARY KEY,
	ptr_nome VARCHAR(30),
    fkUsuario INT,
    constraint ptrUsuario
    foreign key (fkUsuario) references usuarios(idUsuario)
);

CREATE table LizDeOuro (
	idLiz INT PRIMARY KEY auto_increment,
    liz_possui boolean,
    liz_dtConquista DATE,
    fkUsuario INT,
    constraint lizUsuario
    foreign key (fkUsuario) references usuarios(idUsuario)
)auto_increment=1000;

CREATE TABLE IF NOT EXISTS especialidades (
    idEspec INT PRIMARY KEY AUTO_INCREMENT,
    espec_nome VARCHAR(45) UNIQUE,
    espec_modalidade VARCHAR(45),
    espec_dtConquista DATETIME DEFAULT TIMESTAMP,
    espec_possui BOOLEAN,
    fkUsuario INT,
    CONSTRAINT especUsuario FOREIGN KEY (fkUsuario) REFERENCES usuarios(idUsuario)
);

create table guia (
idGuia int primary key auto_increment,
guia_nome varchar(250) unique,
fkUsuario int,
foreign key (fkUsuario) references usuarios(idUsuario)
);

create table insignia (
idInsignia int primary key auto_increment,
insignia_desc varchar(300) unique,
fkUsuario int,
constraint idUser foreign key (fkUsuario) references usuarios(idUsuario)
);


SELECT * FROM usuarios;
SELECT * FROM especialidades;
SELECT * FROM guia;
SELECT * FROM LizDeOuro;

insert into especialidades(espec_nome, espec_modalidade, espec_dtConquista, espec_possui, fkUsuario) VALUES 
( 'Ciclista', 'Desportos', '2023-01-01', true, 100),
( 'Futebol', 'Desportos', '2023-01-04', true, 100),
( 'Natação', 'Desportos', '2023-01-05', true, 100),
( 'Atletismo', 'Desportos', '2023-02-06', true, 100),
( 'Basquete', 'Desportos', '2023-02-07', true, 100),
( 'Volei', 'Desportos', '2023-02-08', true, 100),
( 'Tênis', 'Desportos', '2023-02-09', true, 100),
( 'Handebol', 'Desportos', '2023-03-10', true, 100),
( 'Ginástica', 'Desportos', '2023-03-11', true, 100),
( 'Judô', 'Desportos', '2023-03-12', true, 100),
( 'Karatê', 'Desportos', '2023-03-13', true, 100),
( 'Taekwondo', 'Desportos', '2023-05-14', true, 100),
( 'Xadrez', 'Desportos', '2023-05-15', true, 100),
('Canto', 'Cultura', '2023-05-16', true, 100),
('Dança', 'Cultura', '2023-05-17', true, 100),
('Teatro', 'Cultura', '2023-05-18', true, 100),
('Pintura', 'Cultura', '2023-06-19', true, 100),
('Escultura', 'Cultura', '2023-06-20', true, 100),
('Desenho', 'Cultura', '2023-06-21', true, 100),
( 'Artesanato', 'Cultura', '2023-06-22', true, 100),
( 'Fotografia', 'Cultura', '2023-07-23', true, 100),
( 'Cinema', 'Cultura', '2023-07-24', true, 100);
SELECT espec_nome, espec_modalidade, usr_nome, usr_registro, usr_patrulha FROM usuarios INNER JOIN especialidades ON usuarios.idUsuario = especialidades.fkUsuario;

SELECT espec_modalidade FROM especialidades WHERE espec_dtConquista BETWEEN '2023-01-01' AND '2023-01-31';

SELECT espec_modalidade FROM especialidades WHERE espec_dtConquista BETWEEN '2023-02-01' AND '2023-03-31';

SELECT espec_modalidade FROM especialidades WHERE espec_dtConquista BETWEEN '2023-03-01' AND '2023-04-01';
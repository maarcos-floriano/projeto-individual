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

CREATE table especialidades (
	idEspec int PRIMARY KEY auto_increment,
	espec_nome VARCHAR(45) unique,
	espec_modalidade VARCHAR(45),
    espec_dtConquista DATE,
    espec_possui boolean,
    fkUsuario INT,
    constraint especUsuario 
    foreign key (fkUsuario) references usuarios(idUsuario)
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

insert into especialidade VALUES 
(1, 'Ciclista', 'Desportos', '2023-01-01', true, 100),
(2, 'Futebol', 'Desportos', '2023-01-04', true, 100),
(3, 'Natação', 'Desportos', '2023-01-05', true, 100),
(4, 'Atletismo', 'Desportos', '2023-02-06', true, 100),
(5, 'Basquete', 'Desportos', '2023-02-07', true, 100),
(6, 'Volei', 'Desportos', '2023-02-08', true, 100),
(7, 'Tênis', 'Desportos', '2023-02-09', true, 100),
(8, 'Handebol', 'Desportos', '2023-03-10', true, 100),
(9, 'Ginástica', 'Desportos', '2023-03-11', true, 100),
(10, 'Judô', 'Desportos', '2023-03-12', true, 100),
(11, 'Karatê', 'Desportos', '2023-03-13', true, 100),
(12, 'Taekwondo', 'Desportos', '2023-05-14', true, 100),
(13, 'Xadrez', 'Desportos', '2023-05-15', true, 100),
(14, 'Canto', 'Cultura', '2023-05-16', true, 100),
(15, 'Dança', 'Cultura', '2023-05-17', true, 100),
(16, 'Teatro', 'Cultura', '2023-05-18', true, 100),
(17, 'Pintura', 'Cultura', '2023-06-19', true, 100),
(18, 'Escultura', 'Cultura', '2023-06-20', true, 100),
(19, 'Desenho', 'Cultura', '2023-06-21', true, 100),
(20, 'Artesanato', 'Cultura', '2023-06-22', true, 100),
(21, 'Fotografia', 'Cultura', '2023-07-23', true, 100),
(22, 'Cinema', 'Cultura', '2023-07-24', true, 100);

SELECT espec_nome, espec_modalidade, usr_nome, usr_registro, usr_patrulha FROM usuarios INNER JOIN especialidades ON usuarios.idUsuario = especialidades.fkUsuario;

SELECT espec_modalidade FROM especialidades WHERE espec_dtConquista BETWEEN '2023-01-01' AND '2023-01-31';

SELECT espec_modalidade FROM especialidades WHERE espec_dtConquista BETWEEN '2023-02-01' AND '2023-03-31';

SELECT espec_modalidade FROM especialidades WHERE espec_dtConquista BETWEEN '2023-03-01' AND '2023-04-01';
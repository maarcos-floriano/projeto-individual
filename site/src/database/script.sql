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

select * from usuarios;

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
	espec_nome VARCHAR(45),
	espec_modalidade VARCHAR(45),
    espec_dtConquista DATE,
    espec_possui boolean,
    fkUsuario INT,
    constraint especUsuario 
    foreign key (fkUsuario) references usuarios(idUsuario)
);

insert into especialidades(espec_nome, espec_modalidade, espec_possui, fkUsuario) values
("Acampamento", "Hab.Escoteira", true, 100);

select espec_nome as Possui from especialidades where espec_possui = true AND fkUsuario = 100;

select idUsuario from usuarios where usr_registro = 999999;

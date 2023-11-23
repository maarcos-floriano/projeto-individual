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


select * from usuarios;
select * from especialidades;
select * from guia;
select * from LizDeOuro;
show triggers;

insert into LizDeOuro(liz_possui, fkUsuario) values
(false, 100);

select count(idInsignia) from insignia;

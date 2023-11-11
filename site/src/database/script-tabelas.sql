CREATE DATABASE escoteirosDoBrasil;

use escoteirosDoBrasil;


CREATE table patrulhas (
	idPatrulha int PRIMARY KEY,
	ptr_nome VARCHAR(30),
	ptr_qtdEspecialidades int
);

CREATE table LizDeOuro (
	idLiz INT PRIMARY KEY auto_increment,
	liz_dtConquista date,
	fkUsuario int,
	Foreign Key (fkUsuario) REFERENCES (usuarios)
);

CREATE TABLE usuarios (
idUsuario int PRIMARY KEY auto_increment,
usr_nome VARCHAR(45),
usr_email VARCHAR(255) NOT NULL UNIQUE,
usr_senha VARCHAR(255) NOT NULL,
usr_patrulha VARCHAR(45),
check (usr_patrulha in ('AGUIA', 'LEAO', 'TIGRE')),
usr_registro CHAR(6),
fkPatrulha int,
Foreign Key (fkPatrulha) REFERENCES (patrulhas)
);

CREATE table especialidades (
	idEspecialidades int PRIMARY KEY auto_increment,
	espec_nome VARCHAR(45),
	espec_modalidade VARCHAR(45)
);

CREATE table dataEspecialidade (
	fkEspecialidade,
	Foreign Key (fkEspecialidade) REFERENCES (especialidades),
	fkUsuario,
	Foreign Key (fkUsuario) REFERENCES (usuarios),
	dtEspec date,
	PRIMARY KEY (fkEspecialidade, fkUsuario)
);
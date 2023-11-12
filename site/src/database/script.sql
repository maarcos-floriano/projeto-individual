CREATE DATABASE escoteirosDoBrasil;

use escoteirosDoBrasil;


CREATE table patrulhas (
	idPatrulha int PRIMARY KEY,
	ptr_nome VARCHAR(30),
	ptr_qtdEspecialidades int
);

CREATE TABLE usuarios (
idUsuario int PRIMARY KEY auto_increment,
usr_nome VARCHAR(45),
usr_email VARCHAR(255) NOT NULL,
usr_senha VARCHAR(255) NOT NULL,
usr_patrulha VARCHAR(45),
check (usr_patrulha in ('AGUIA', 'LEAO', 'TIGRE')),
usr_registro CHAR(6) NOT NULL UNIQUE,
fkPatrulha int,
Foreign Key (fkPatrulha) REFERENCES patrulhas(idPatrulha)
);

CREATE table LizDeOuro (
	idLiz INT PRIMARY KEY auto_increment,
	liz_dtConquista date,
	fkUsuario int,
	Foreign Key (fkUsuario) REFERENCES usuarios(idUsuario)
);

CREATE table especialidades (
	idEspecialidades int PRIMARY KEY auto_increment,
	espec_nome VARCHAR(45),
	espec_modalidade VARCHAR(45)
);

CREATE table dataEspecialidade (
	fkEspecialidade int,
	Foreign Key (fkEspecialidade) REFERENCES especialidades(idEspecialidades),
	fkUsuario int,
	Foreign Key (fkUsuario) REFERENCES usuarios(idUsuario),
	dtEspec date,
	PRIMARY KEY (fkEspecialidade, fkUsuario)
);


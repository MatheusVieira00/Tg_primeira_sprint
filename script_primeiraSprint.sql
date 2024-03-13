create database VolteParaCasa;

use VolteParaCasa;

create table representante(
	codigo bigint primary key auto_increment, 
	cpf bigint (11),
    rg bigint (9),
    fotoRepresentante mediumblob,
    senha varchar (100),
    nome varchar (50),
    telefone bigint (14),
    endereco varchar (150),
    numeroEndereco varchar (5),
    email varchar (50),
    emailAlt varchar (50),
    estadoCivil enum ('solteiro(a)', 'casado(a)', 'divorciado(a)', 'viuvo(a)'),
    generoRepresentante enum ('mulher cisgênero', 'mulher transgênero','Homem cisgênero', 'Homem transgênero', 'não-binário', 'outro'),
    grauParentescoIdoso varchar (50),
    logAcesso timestamp,
	documentoComprobatorio mediumblob
);

create table idoso(
	codigo bigint primary key auto_increment,
	cpf bigint (11),
    rg bigint (9),
    nome varchar (50),
    fotoIdoso mediumblob,
    patologia varchar (100),
    laudoMedico mediumblob,
    arcadaDentaria mediumblob,
    fotoRG mediumblob,
    descritivo varchar (200),
    estadoCivil enum ('solteiro(a)', 'casado(a)', 'divorciado(a)', 'viuvo(a)'),
    medicamentos varchar (100),
    situacaoEncontrado boolean,
    QrCode text
);


alter table idoso add codigoRepresentante bigint;
alter table idoso add foreign key
(codigoRepresentante) references representante(codigo);



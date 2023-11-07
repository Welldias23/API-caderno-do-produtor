create database cadernoDoProdutor;

create table produtor (
  id serial primary key,
  nome varchar(30) not null,
  sobrenome varchar(30) not null,
  cpf varchar(11) not null,
  email text not null unique,
  senha text not null
);

create table propriedade (
  id serial primary key,
  id_produtor integer references produtor(id) not null,
  nome_propriedade varchar(30) not null
);

create table controlePluvimetrico (
  id_propriedade integer references propriedade(id) not null,
  data timestamp not null,
  volumeDeChuva int not null
);

create table controleLeiteiro (
  id_propriedade integer references propriedade(id) not null,
  data timestamp not null,
 	leite int not null
  );


create table controleRebanho (
  id int not null unique,
  nome varchar(30),
  data timestamp not null,
  sexo varchar(1) not null,
  peso int  not null,
  id_propriedade integer references propriedade(id) not null
  );


create table controleDeNascimentos (
  id int not null unique,
  nome varchar(30),
  data timestamp not null,
  sexo varchar(1) not null,
  id_pai integer references controleRebanho(id) not null,
  id_mae integer references controleRebanho(id) not null,
  peso int  not null,
  observacao text,
  id_propriedade integer references propriedade(id) not null
  );


create table controleReprodutivo (
  id_animal integer references controleRebanho(id) not null,
  nome varchar(30),
  data_hora_do_cio timestamp not null,
  data_hora_da_inseminacao_monta timestamp not null,
  id_touro integer references controleRebanho(id) not null,
  inseminador varchar(30) not null,
  prenhe varchar(10),
  previsao_de_parto timestamp,
  observacao text,
  id_propriedade integer references propriedade(id) not null
  );


create table controleSecagens (
  id_animal integer references controleRebanho(id) not null,
  nome varchar(30),
  previsao_de_parto timestamp not null,
  data_de_secagem timestamp not null,
  medicamento_utilizado text,
  observacao text,
  id_propriedade integer references propriedade(id) not null
  );

  create table controleReprodutivoNuvilhas (
  id_animal integer references controleRebanho(id) not null,
  nome varchar(30),
  data_hora_do_cio timestamp not null,
  data_hora_da_inseminacao_monta timestamp not null,
  id_touro integer references controleRebanho(id) not null,
  inseminador varchar(30) not null,
  prenhe varchar(10),
  previsao_de_parto timestamp,
  observacao text,
  id_propriedade integer references propriedade(id) not null
  );


create table controlePesagens (
  id_animal integer references controleRebanho(id) not null,
  nome varchar(30),
  data_pesagem timestamp not null,
  id_propriedade integer references propriedade(id) not null
  );


create table controleOcorrencias (
  id_animal integer references controleRebanho(id) not null,
  nome varchar(30),
  data timestamp not null,
  ocorrencia text not null,
  tratamento text not null,
  data_descarte timestamp not null,
  dias_descarte int not null,
  id_propriedade integer references propriedade(id) not null
  );

  create table controleDespesas (
  id serial primary key,
  despesa varchar(30) not null,
  quantidade int not null,
  tipo text not null,
  valor_unidade int not null,
  valor_total int not null,
  observacoes text,
  id_propriedade integer references propriedade(id) not null
  );


  create table controleReceitas (
  id serial primary key,
  receita varchar(30) not null,
  quantidade int not null,
  unidade varchar(15) not null,
  valor_unidade int not null,
  valor_total int not null,
  observacoes text,
  id_propriedade integer references propriedade(id) not null
  );



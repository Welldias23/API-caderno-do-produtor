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
  nome_propriedade varchar(30) not null,
  area_da_atividade float(2) not null,
  area_produtiva float(2) not null
);

create table controle_pluviometrico (
  id serial primary key,
  id_produtor integer references produtor(id) not null,
  id_propriedade integer references propriedade(id) not null,
  data_chuva date not null,
  volume_de_chuva int not null
);

create table controle_leiteiro (
  id serial primary key,
  id_produtor integer references produtor(id) not null,
  id_propriedade integer references propriedade(id) not null,
  data timestamp not null,
  industria int not null,
  consumo_familiar int not null, 
  consumo_bezerros int not null,
  descarte int not null
  );


create table controle_rebanho (
  id serial primary key,
  id_animal int not null,
  nome varchar(30),
  data_nascimento timestamp,
  sexo varchar(1) not null,
  id_pai int,
  id_mae int,
  peso int  not null,
  observacao text,
  id_produtor integer references produtor(id) not null,
  id_propriedade integer references propriedade(id) not null
  );


create table controle_leiteiro_individual (
  id serial primary key,
  id_produtor integer references produtor(id) not null,
  id_vaca integer references controle_rebanho(id) not null,
  id_propriedade integer references propriedade(id) not null,
  data timestamp not null,
  lote int not null,
  producao_manha int  not null,
  producao_tarde int not null
  );


create table controle_nascimentos (
  id serial primary key,
  id_animal int not null,
  nome varchar(30),
  data_nascimento timestamp not null,
  sexo varchar(1) not null,
  id_pai int,
  id_mae integer references controle_rebanho(id) not null,
  peso int  not null,
  observacao text,
  id_produtor integer references produtor(id) not null,
  id_propriedade integer references propriedade(id) not null
  );


alter table controle_rebanho 
add column id_nascimento integer references controle_nascimentos(id) unique;

create table controle_reprodutivo (
  id serial primary key,
  id_animal integer references controle_rebanho(id) not null,
  nome varchar(30),
  data_hora_do_cio timestamp not null,
  data_hora_da_inseminacao_monta timestamp not null,
  nome_touro varchar(30) not null,
  inseminador varchar(30) not null,
  prenhe varchar(10),
  previsao_de_parto timestamp,
  observacao text,
  id_produtor integer references produtor(id) not null,
  id_propriedade integer references propriedade(id) not null
  );


create table controle_secagens (
  id serial primary key,
  id_animal integer references controle_rebanho(id) not null,
  nome varchar(30),
  previsao_de_parto timestamp not null,
  data_de_secagem timestamp not null,
  medicamento_utilizado text,
  observacao text,
  id_produtor integer references produtor(id) not null,
  id_propriedade integer references propriedade(id) not null
  );

  -- create table controle_reprodutivo_novilhas (
  -- id serial primary key,
  -- id_animal integer references controle_rebanho(id) not null,
  -- nome varchar(30),
  -- data_hora_do_cio timestamp not null,
  -- data_hora_da_inseminacao_monta timestamp not null,
  -- id_touro integer references controle_rebanho(id) not null,
  -- inseminador varchar(30) not null,
  -- previsao_de_parto timestamp,
  -- observacao text,
  -- id_propriedade integer references propriedade(id) not null
  -- );


create table controle_pesagens (
  id serial primary key,
  id_animal integer references controle_rebanho(id) not null,
  nome varchar(30),
  data_pesagem timestamp not null,
  apta_reroducao boolean not null,
  id_produtor integer references produtor(id) not null,
  id_propriedade integer references propriedade(id) not null
  );


create table controle_ocorrencias (
  id_animal integer references controle_rebanho(id) not null,
  nome varchar(30),
  data timestamp not null,
  ocorrencia text not null,
  tratamento text not null,
  data_descarte timestamp not null,
  dias_descarte int not null,
  id_propriedade integer references propriedade(id) not null
  );

  create table controle_despesas (
  id serial primary key,
  despesa varchar(30) not null,
  quantidade int not null,
  tipo text not null,
  valor_unidade int not null,
  valor_total int not null,
  observacoes text,
  id_propriedade integer references propriedade(id) not null
  );


  create table controle_receitas (
  id serial primary key,
  receita varchar(30) not null,
  quantidade int not null,
  unidade varchar(15) not null,
  valor_unidade int not null,
  valor_total int not null,
  observacoes text,
  id_propriedade integer references propriedade(id) not null
  );



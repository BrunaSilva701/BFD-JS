```text
...................
|CLIENTE          |
|PK cpf           |
|nome             |
|dataDeNascimento |
...................
        ↕
     .........
     | Aluga |
     .........
        ↕
.................
|FILME          |
|PK titulo      |
|anoDeLancameto |
|genero         |
.................
        ↕
     ..........
     | Contém |
     ..........
        ↕
   ...........
   |LOCADORA |
   |PK cnpj  |
   |endereco |
   |produtos |
   ...........

Tabela clientes
creat table cliente(
    cpf int not null primary key,
    nome varchar(30),
    dataDeNascimento date,
)default utf8;

Tabela filmes
creat table filme(
    titulo varchar(30) primary key,
    anoDeLancamento int,
    genero varchar(20),
)default utf8;

Tabela locadora
creat table locadora(
    cnpj int primary key,
    endereco varchar(30),
    produtos varchar(20),
)default utf8;

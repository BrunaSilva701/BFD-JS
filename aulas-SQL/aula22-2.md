```
1) Diferencie dado, informação e banco de dados
- Dados: Itens que não possuem significado por si só
- Informação: Dados que foram processados.
- Banco de dados: Sistema organizado para guardar, gerenciar e modificar informações.

2) O que é um SGBD? Cite 3 exemplos.
R- É um software que atua como intermediário entre usuários e um banco de dados, permitindo criar, 
gerenciar e acessar os dados de forma organizada, segura e eficiente
Exemplos:  MySQL, Oracle e Microsoft SQL Server

3) Explique a diferença entre modelo conceitual, lógico e fisíco.
- Modelo conceitual: Diarama com entidades, relacionamnetos e atributos.
- Modelo lógico: Representação em tabelas, chaves primarias e estrangeiras.
- Modelo fisíco: Implmentação no banco de dados com SQL.

4) Construa um DER simples para um sistema de vendas (cliente, produto, pedido).
|Cliente|-------Faz------|Pedido|------Entrega------|Produto|

5) Transforme esse DER em tabelas relacionais (modelo Lógico).
|Cliente|-------Faz------|Pedido|------Entrega------|Produto|
PK cpfCliente             PK IdPedido                PK idProduto                 
nome                      qtdPedidos                 FormaDePagamento
endereco                  dataDoPedido         
email                     FK cpfCliente
                          FK idProduto
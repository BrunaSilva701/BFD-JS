## • API base: https://jsonplaceholder.typicode.com

## 1° Passo: GET/USERS
### Consulta
- Método: Selecione GET.
- URL: Insira a URL completa: https://jsonplaceholder.typicode.com/users
- Envie: Clique no botão Send (Enviar).

### Analise
- Formato dos dados: O formato de dados é JSON (JavaScript Object Notation).                         
-> Características: Os dados são estruturados em pares de chave-valor (ex: "id": 1) e usam colchetes ([]) e chaves ({}) para representar listas e objetos, respectivamente.

- Tipo de recurso retornado: O tipo de recurso retornado é um Array de Objetos JSON.                   
-> O código começa e termina com colchetes: [ ... ], indicando um Array (ou lista/coleção).          
-> Cada item dentro desse array, delimitado por chaves { ... }, representa um único recurso, neste caso, um Objeto Usuário.           
-> Em termos de API REST, isso representa uma Coleção de Recursos (/users).

- Estrutura JSON: A estrutura é de um Array de Objetos complexos, onde cada objeto contém campos com tipos de dados variados e aninhamento (objetos dentro de objetos).

- Exemplo:
```
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  ...
]
```

## 2° Passo: GET/ POSTS
### Consulta
- Método: Selecione GET.
- URL: Insira a URL completa: https://jsonplaceholder.typicode.com/posts
- Envie: Clique no botão Send.

### Analise
- Formato dos dados: O formato de dados é JSON (JavaScript Object Notation).          
-> Evidência: O código utiliza pares de chave-valor (ex: "id": 1), aspas duplas para strings (ex: "title": "...") e chaves/colchetes para estruturar o conteúdo.

- Tipo de recurso retornado: O tipo de recurso retornado é um Array de Objetos JSON.            
-> Delimitação: O código começa e termina com colchetes ([ e ]), indicando que a resposta é uma lista ou coleção.             
-> Conteúdo: Dentro dessa lista, cada bloco delimitado por chaves ({ e }) representa um único Objeto Post (recurso).                   
-> Em termos REST: É uma resposta de "Coleção" (Collection Resource), contendo vários itens do mesmo tipo (Post).

- Estrutura JSON: A estrutura é de um Array de Objetos simples, onde cada objeto representa um único post e não contém aninhamentos profundos (objetos dentro de objetos).

- Exemplo:
```
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }, 
  ...
]
```

## 3° Passo: GET/ comments?postId=1
### Consulta
- Esta rota usa um parâmetro de consulta (query parameter) para filtrar os resultados. Ela retorna apenas os comentários associados ao post com id=1.
- Método: Selecione GET.
- URL: Insira a URL completa: https://jsonplaceholder.typicode.com/comments?postId=1
- Dica: Ao digitar o ?postId=1, o Postman geralmente preenche automaticamente a seção "Params" (Parâmetros) abaixo da URL.
- Envie: Clique no botão Send.

### Analise
- Formato dos dados: O formato de dados é JSON (JavaScript Object Notation).           
-> Evidência: O código é composto por pares de chave-valor (ex: "email": "...") e segue a sintaxe padrão JSON, utilizando colchetes e chaves para estruturação.

- Tipo de recurso retornado: O tipo de recurso retornado é um Array de Objetos JSON.                  
-> Delimitação: O código começa e termina com colchetes ([ e ]), indicando que a resposta é uma lista (Array).               
-> Conteúdo: Cada bloco delimitado por chaves ({ e }) dentro do array é um Objeto Comentário (recurso).          
-> Observação: Embora a requisição tenha usado um parâmetro de filtro (?postId=1), o recurso retornado ainda é uma coleção (Array) de comentários que atendem a esse filtro.

- Estrutura JSON: A estrutura é de um Array de Objetos simples

- Exemplo:
```
[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  ...
]
```
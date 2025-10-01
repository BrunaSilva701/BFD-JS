class Biblioteca{
    titulo: string;
    autor: string;
    
    constructor(titulo: string, autor: string){
        this.titulo = titulo;
        this.autor = autor;
    }
}

class Estante extends Biblioteca{
    static listarLivro() {
        throw new Error("Method not implemented.");
    }
   livros:string [] = [];

    adicionarLivro(livro: string): void{
        this.livros.push(livro);
        console.log('Livro adicionado!');
    }

    listarLivro(): void{
        console.log('---Livros da Biblioteca---');
        for(let i=0; i < this.livros.length; i++){
            console.log(this.livros[i]); //Acessar um livro por vez
        }
    }
}

const estante = new Estante('Estante principal', 'Bibliotecario');
estante.adicionarLivro('A Culpa é das Estrelas');
estante.adicionarLivro('A Seleção');
estante.adicionarLivro('Cidades de Papel');

// Listando os livros
estante.listarLivro();

// const livro1 = new Estante ('A Culpa é das Estrelas', 'John Green')
// livro1.adicionarLivro('A Culpa é das Estrelas');
// const livro2 = new Estante ('A Seleçã', 'Kiera Kass')
// livro2.adicionarLivro('A Seleçã');
// const livro3 = new Estante ('Cidades de papel', 'John Green')
// livro3.adicionarLivro('Cidades de papel');
// Estante.listarLivro();

//POR QUE NÃO FUNCIONA
//1.Cada instância (livro1, livro2, livro3) tem seu próprio array livros.
//2.Quando você faz livro1.adicionarLivro('A Culpa é das Estrelas'), você está adicionando o livro no array livros da instância livro1 somente.
//3.O mesmo acontece para livro2 e livro3: cada um tem um array separado.
//4.Ou seja, livro1.livros tem 1 livro, livro2.livros tem 1 livro, e livro3.livros tem 1 livro — mas eles não estão juntos.
//5.Chamar Estante.listarLivro() não faz sentido, porque listarLivro é um método de instância, não estático.
//6.Estante é a classe, e listarLivro() está definido como método de instância.
//7.Para chamar listarLivro(), você precisa chamar em um objeto criado a partir da classe, como livro1.listarLivro().
//8.Estante.listarLivro() tenta chamar o método no próprio construtor, que não existe.

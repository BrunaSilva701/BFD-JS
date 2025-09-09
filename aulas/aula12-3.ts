//Criando uma classe biblioteca com uma lista de livros

class Livro{
    titulo: string;

    constructor(titulo: string){
        this.titulo = titulo;
    }
}

class Biblioteca{
    livros: Livro[] = [];

    //Método para adicionar os livros
    adicionarLivro(livros: Livro): void{
        this.livros.push(livros)
        console.log('Livro adicionado!')
    }

    //??
    //Método para procurar titulos
    buscarLivroPorTitulo(titulo: string): void{
        for (const livros of this.livros){ //Percorre o array
            if(livros.titulo === titulo){
            }
            console.log('Livro encontrado!')
        } 
    }

    exibirLivros(): void{
        for (const livros of this.livros){
            console.log(`Título: ${livros.titulo}`)
        }
    }
}

//Cria livros
const l1 = new Livro('Dom Casmurro');
const l2 = new Livro('Morro dos ventos uivantes');
const l3 = new Livro('Desventuras em série');

//Adiciona livros ao array
const estante = new Biblioteca();
estante.adicionarLivro(l1);
estante.adicionarLivro(l2);
estante.adicionarLivro(l3);

//Exibi os livros
estante.exibirLivros();

//Busca por titulo expecifico
const buscar = estante.buscarLivroPorTitulo('Dom Casmurro');
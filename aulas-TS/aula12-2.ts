//Criando uma classe pedido com uma lista de produtos

class Produto{
    nome: string;
    preco: number;

    constructor(nome: string , preco:number){
        this.nome = nome;
        this.preco = preco;
    }
}

class Pedido{
    produtos: Produto[] = []; //Lista de produtos


    //Método para adicionar o produto
    adicionarProduto(produto: Produto): void{
        this.produtos.push(produto);
        console.log('Produto adicionado!')
    }

    //??
    //Método remover produto
    removerProduto(produto: Produto): void{
        const index = this.produtos.indexOf(produto);
        if(index > -1){
            this.produtos.splice(index, 1);
            console.log('Produto removido!');
        }
    }

    //Método cacular total
    calcularTotal(): number{
        let total = 0
        for (const produto of this.produtos){
            total += produto.preco;
        }
        return total;
    }

    //Método
    exibirProdutos(): void{
        for (const produto of this.produtos){
            console.log(`Nome: ${produto.nome} - Preço: ${produto.preco}`)
        }
       console.log(`Total: ${this.calcularTotal()}`);
    }

}

//Criação dos produtos
const p1 = new Produto ('Notebook', 1000.00);
const p2 = new Produto ('Iphone', 3000.00);
const p3 = new Produto ('Mouse', 500.00);

//Adiciona os produtos
const carrinho = new Pedido();
carrinho.adicionarProduto(p1);
carrinho.adicionarProduto(p2);
carrinho.adicionarProduto(p3);

//Mostra todos os produtos
carrinho.exibirProdutos();

//Remove o produto do carrinho1
carrinho.removerProduto(p1)

//Mostra os produtos que ficaram
carrinho.exibirProdutos();
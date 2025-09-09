class Pedido{
    preco: number;
    nome: string
    produtos : Pedido [] = []; //Lista de produtos

    constructor(nome: string, preco:number){
        this.nome = nome;
        this.preco = preco;
    }


    //Método para adicionar o produto
    adicionarProduto(produto: Pedido): void{
        this.produto.push(produto);
        console.log('Produto adicionado!')
    }

    //Método
    removerProduto(produto: Pedido): void{
        this.produto.pop(produto);
        console.log('Produto removido!')
    }

    //Método
    calcularTotal(): number{
        let total = 0
        for (const produto of this.produtos){
            total += produto.preco;
        }

        return total;
    }

    //Método
    exibirproduto(): void{
        for (const produto of this.produtos){
             console.log(`Nome: ${this.nome} - Preço: ${this.preco}`)
        }
       console.log(`Total: ${this.calcularTotal}`);
    }

}

const p1 = new Pedido ('Notbook', 1000.00)
const p2 = new Pedido ('Iphone', 3000.00)
const p3 = new Pedido ('Mouse', 500.00)

const produto = new Pedido()
produto.adicionarProduto(p1);
produto.adicionarProduto(p2);
produto.adicionarProduto(p3);

produto.exibirproduto();

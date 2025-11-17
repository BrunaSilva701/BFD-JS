//Teste unitario para a classe Estoque
class Estoque{
    produtos: string
    quantidade: number;

    constructor(produtos:string, quantidade: number){
        this.produtos = produtos;
        this.quantidade = quantidade;
    }

    adicionarProduto(qtd: number): number{
        this.quantidade += qtd;
        return this.quantidade;
    }

    registrarEntrada(qtd: number): number{
        this.quantidade += qtd;
        if (this.quantidade <0){
            console.log('Valor abaixo do esperado. Adicione novo valor');
        }
        return this.quantidade;
    }

    registrarSaida(qtd: number): number{
        this.quantidade -= qtd;
        if (this.quantidade > 10){
            console.log('Valor acima do esperado. Registre nova saida');
        }
        return this.quantidade;
    }
}
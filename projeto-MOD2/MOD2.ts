//Projeto de conclusão de modulo II - Monitoramento de estoque

const entrada = require ('prompt-sync')({sigint:false});

class Produto{
    nome: string;
    codigo: string;
    preco: number;
    private quantidade: number;

    constructor(nome: string, codigo: string, preco:number, quantidade: number){
        this.nome = nome;
        this.codigo= codigo;
        this.preco= preco;
        this.quantidade = quantidade;
    }

    //Acessar o valor privado (getter)
    getQtd(): number{
        return this.quantidade;
    }

    //Modificar o valor privado (setter)
    setQtd(valor: number): void{
        if (valor <= 0){
            throw new Error('Quantidade inválida');
        }
        this.quantidade = valor;
    }
    
    //Método: Adicionar produtos
    adicionar(qtd: number): void{
        this.quantidade += qtd;
        console.log(`Quantidade de produtos adicionados: ${this.quantidade}`);
    }
    
    //Método: Remover produtos
    remover(qtd: number):void{
        if(qtd < this.quantidade){
            throw new Error('Estoque insuficiente');
        }
        this.quantidade -= qtd;
    }
}

class Movimentacao{
    produtos: Produto;
    quantidade: number;
    data: Date;

    constructor(produtos: Produto, quantidade: number){
        this.produtos = produtos,
        this.quantidade = quantidade,
        this.data = new Date();
    }

    //Método leitura de entrada
    lerEntrada():void{
        console.log(`Produto cadastrado: ${this.produtos}`);
    }

    //Método leitura de saida
    lerSaida():void{
        console.log(`Produto retirado: ${this.produtos}`);
    }
}

class Entrada extends Movimentacao{
    entrada(): void{
        this.produtos.adicionar(this.quantidade);
        console.log(`Podutos adicionados: QTD: ${this.quantidade} | Nome: ${this.produtos.nome}`);
    }
}

class Saida extends Movimentacao{
    saida():void{
        this.produtos.remover(this.quantidade)
        console.log(`Podutos adicionados: QTD: ${this.quantidade} | Nome: ${this.produtos.nome}`)
    }
}

//estoque
class Estoque{
    produtos: Produto[] = [];
    movimentacoes: Movimentacao[] = [];

    //Método para adicionar produto
    adicionaProduto(produto: Entrada): void{
        this.produtos.push(produto);
    }

    //Método para retirar  produto
    retirarProduto(produto: Saida): void{
        this.produtos.push(produto);
    }

    //Relatório do estoque
    relatorio(): void{
        console.log('--- ESTOQUE ---');
        console.log(`Código: ${this.codigo} |Produto: ${this.produtos} | Quantidade: ${this.getQtd} | Preço: ${this.preco}`);
    }

    //alerta de estoque baixo
    alertaEstoque(quantidade: number):void{
        if(quantidade <= 2){
        console.log('⚠️ATENÇÃO: Estoque baixo!');
        }
    }
}

//Menu interativo
let opcao: number;

do{
    console.log('n/--- MENU ---');
    console.log('1-Cadastrar Produto')
    console.log('2-Registrar entrada')
    console.log('3-Registar Saida')
    console.log('4-Gerar relatório de estoque')
    console.log('0-Sair do sistema')

    opcao = Number(entrada('Escolha uma opição: '));

    try{
        switch (opcao){
            case 1:{
              console.log('Produto cadastrado');
              break
            }
            case 2:{
                console.log('Entrada registrada');
                break
            }
            case 3:{
                console.log('Saida registrada');
                break
            }
            case 4:{
                console.log('Gerando relatório...');
                break
            }
            case 0:{
                console.log('Saindo...');
                break
            }
            default:{
                console.log('Opição não é aceita. Por favor tentar novamente!');
            }
        }
    }catch (erro){
        console.log('Error: ', (erro as Error).message);
    }
    
}while(opcao !== 0)

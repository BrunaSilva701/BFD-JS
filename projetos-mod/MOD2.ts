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

    //Acessar o valor privado
    getQtd(): number{
        return this.quantidade;
    }

    //Modificar o valor privado
    setQtd(valor: number): void{
        if (valor < 1){
            console.log('Quantidade não aceita');
        }
    }
}

class Movimentacao{
    produtos: string
    quantidade: number
    data: string

    constructor(produtos: string, quantidade: number, data: string){
        this.produtos = produtos,
        this.quantidade = quantidade,
        this.data = data;
    }

    //Método leitura de entrada
    lerEntrada():void{
        console.log('Produto cadastrado: ');
    }

    //Método leitura de saida
    lerSaida():void{
        console.log('Produto retirado: ');
    }
}

class Entrada extends Movimentacao{
    this.produtos.setQtd(this.produtos.getQtd() - this.quantidade);
}

class Saida extends Movimentacao{
    this.produtos.setQtd(this.produtos.getQtd() + this.quantidade);
}

//estoque
class Estoque extends Produto{
    produtos = Produto[];
    movimentacoes = Movimentacao[];

    //Método para adicionar produto
    retirarProduto(): void{
        this.produtos.push(produtos);
    }

    //Método para retirar produto
    adicionaProduto(): void{
        this.produtos.pop(produtos);
    }

    //Relatório do estoque
    relatorio(): void{
        console.log('--- ESTOQUE ---');
        console.log(`Código: ${this.codigo} |Produto: ${this.produtos} | Quantidade: ${this.getQtd} | Preço: ${this.preco}`);
    }

    //alerta de estoque baixo
    alertaEstoque(quantidade: number):void{
        if(quantidade =< 2){
        console.log('ATENÇÃO: Estoque baixo!');
        }
    }
}


while(==!0){
    console.log('--- MENU ---');
    console.log('1-Cadastrar Produto')
    console.log('2-Registrar entrada')
    console.log('3-Registar Saida')
    console.log('4-Gerar relatório de estoque')
    console.log('0-Sair do sistema')

    switch (opicao){
        case 1:{
            console.log('Produto cadastrado');
        }
        case 2:{
            console.log('Entrada registrada');
        }
        case 3:{
            console.log('Saida registrada');
        }
        case 4:{
            console.log('Gerando relatório...');
        }
        case 0:{
            console.log('Saindo...');
        }
        outro caso:{
            console.log('Opição não é aceita. Por favor tentar novamente!');
        }
    }
}

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
    produto: string
    quantidade: number
    data: string

    constructor(produto: string, quantidade: number, data: string){
        this.produto = produto,
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
    this.produto.setQtd(this.produto.getQtd() - this.quantidade);
}

class Saida extends Movimentacao{
    this.produto.setQtd(this.produto.getQtd() + this.quantidade);
}

//estoque
class Estoque extends Produto{
    produto = [];
    movimentacao = [];

    //Método para adicionar produto
    retirarProduto(): void{
        this.produto.push(produto);
    }

    //Método para retirar produto
    adicionaProduto(): void{
        this.produto.pop(produto);
    }

    //Relatório do estoque
    relatorio(): void{
        console.log('--- ESTOQUE ---');
        console.log(`Código: ${this.codigo} |Produto: ${this.produto} | Quantidade: ${this.getQtd} | Preço: ${this.preco}`);
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
        outro caso
    }
}

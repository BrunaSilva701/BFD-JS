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
        if (valor < 0){
            throw new Error('Quantidade inválida');
        }
        this.quantidade = valor;
    }
    
    //Método: Adicionar produtos
    adicionar(qtd: number): void{
        this.quantidade += qtd;
        //console.log(`Quantidade de produtos adicionados: ${this.quantidade}`);
    }
    
    //Método: Remover produtos
    remover(qtd: number):void{
        //Verificar se a quantidade que se quer retirar é maior que o estoque
        if(qtd > this.quantidade){
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

    //Método existente na classe pai (Movimentacao) apenas para que as classes filhas (Entrada e Saída) possam sobrescrever (redefinir) esse método.
    registrar(): void {} 
}

class Entrada extends Movimentacao{
    registrar(): void{
        this.produtos.adicionar(this.quantidade);
        console.log(`Entrada registrada: +${this.quantidade} ${this.produtos.nome}`);
    }
}

class Saida extends Movimentacao{
    registrar():void{
        this.produtos.remover(this.quantidade)
        console.log(`Saida registrada: -${this.quantidade} ${this.produtos.nome}`)
    }
}

//estoque
class Estoque{
    produtos: Produto[] = [];
    movimentacoes: Movimentacao[] = [];

    //Método para cadastrar produto
    cadastrarProduto(p: Produto): void{
        //Verificação de quantidade negativa
        if (p.getQtd() <= 0) {
            throw new Error("Quantidade inválida! Não foi possível adicionar ao estoque.");
        }
        this.produtos.push(p);
    }
    //Método para adicionar produto
    registrarEntrada(e: Entrada): void{
        e.registrar();
        this.movimentacoes.push(e);
    }
    
    //Método para retirar produto
    registrarSaida(s: Saida): void{
        s.registrar();
        this.movimentacoes.push(s);
    }

    //Relatório do estoque
    relatorio(): void{
        console.log('\n--- ESTOQUE ---');
        //Correr o array de produtos
        for (let p of this.produtos){
            console.log(`Código: ${p.codigo} |Produto: ${p.nome} | Quantidade: ${p.getQtd()} | Preço: ${p.preco}`);
            //Verificação de estoque baixo
            if(p.getQtd() <= 2){
                console.log('⚠️ ATENÇÃO: Estoque baixo!');
            }
        }
    }
}

//Menu interativo
const estoque = new Estoque();
let opcao: number;

do{
    console.log('\n--- MENU ---');
    console.log('1-Cadastrar Produto')
    console.log('2-Registrar entrada')
    console.log('3-Registar Saida')
    console.log('4-Gerar relatório de estoque')
    console.log('0-Sair do sistema')

    opcao = Number(entrada('Escolha uma opição: '));

    try{
        switch (opcao){
            //Solicita as informações do produto que deseja cadastrar
            case 1:{
                const nome = entrada('Nome do produto:');
                const codigo = entrada('Código do produto:');
                const preco = Number(entrada('Preço do produto:'));
                const quantidade = Number(entrada('Quantidade do produto:'));
                const produto = new Produto(nome, codigo, preco, quantidade); 
                estoque.cadastrarProduto(produto)
                console.log('Produto cadastrado');
                break
            }

            //Solicita as informações do produto que deseja adicionar ao estoque
            case 2:{
                const codigo = entrada('Código do produto:');
                const qtdEntrada = Number(entrada('Quantidade: '));
                const produtoEntrada = estoque.produtos.find(p => p.codigo === codigo);
                if (!produtoEntrada) throw new Error("Produto não encontrado!");
                const e = new Entrada(produtoEntrada, qtdEntrada);
                estoque.registrarEntrada(e)
                console.log('Entrada registrada');
                break
            }

            //Solicita as informações do produto que deseja retirar do estoque
            case 3:{
                const codigo = entrada('Código do produto:');
                const qtdSaida = Number(entrada('Quantidade: '));
                const produtoSaida = estoque.produtos.find(p => p.codigo === codigo);
                if (!produtoSaida) throw new Error("Produto não encontrado!");
                const e = new Saida(produtoSaida, qtdSaida);
                estoque.registrarEntrada(e)
                console.log('Saida registrada');
                break
            }

            //Gera o relatório do estoque
            case 4:{
                estoque.relatorio();
                break
            }

            //Encerra o sistema
            case 0:{
                console.log('Saindo...');
                break
            }

            //Saida para opição inválida
            default:{
                console.log('Opição não é aceita. Por favor, tente novamente!');
            }
        }
    }catch (erro){
        console.log('Error:', (erro as Error).message);
    }
    
}while(opcao !== 0)

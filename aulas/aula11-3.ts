// POO - PEDIDO

class Pedido{
    id:string;
    total:number;

    constructor (id: string){ //Referente aos objetos criados a partir da classe
        this.id = id; 
        this.total = 0; //Total iniciado em 0
    }

    exibir(): void{
        console.log(`ID: ${this.id} - Total: ${this.total}`)
    }

    adicionarValor(v:number): void{ //Soma ao total
        this.total += v;
    }
}

//Criação das IDs
const pedido1 = new Pedido ('1');
const pedido2 = new Pedido ('2');
const pedido3 = new Pedido ('3');

//Adicionar valores
pedido1.adicionarValor(30);
pedido2.adicionarValor(44);
pedido3.adicionarValor(25);

//Saida
pedido1.exibir();
pedido2.exibir();
pedido3.exibir();

//PS: O que importa na hora de criar o objeto é o que o construtor pede. Nesse caso o construtor não pedia o total e sim o iniciava em 0,
//assim foi criado um outro metodo para adicionar os valores e por isso não pode colocar o ID e o Total juntos no new
abstract class Animal{
    nome: string;

    constructor (nome: string){
        this.nome = nome;
    }

    abstract emitirSom():void; //Por ser abstrato não tem implementação

    //Método que mostra o nome
    apresentar(): void{
        console.log(`Nome: ${this.nome}`)
    }
}

class Cachorro extends Animal{
    emitirSom(): void{
        console.log(`Au Au!`);
    }
}

class Gato extends Animal{
    emitirSom(): void{
        console.log(`Miau!`);
    }
}

const cao1 = new Cachorro ('Totó');
const gato1 = new Gato ('Mimi');

cao1.apresentar();
cao1.emitirSom();

gato1.apresentar();
gato1.emitirSom();

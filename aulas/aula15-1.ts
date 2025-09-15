interface IVeiculo{
    marca: string;
    modelo: string;
    ligar(): void;
    desligar(): void;
}


//classe 1 
class Carro implements IVeiculo{
    constructor(public marca: string, public modelo:string){}

    ligar(): void{
        console.log(`O carro ${this.marca} ${this.modelo} está ligado`);
    }

    desligar(): void{
       console.log(`O carro ${this.marca} ${this.modelo} está desligado`);
    }

}


//classe 2
class Moto implements IVeiculo{
    constructor(public marca: string, public modelo:string){}
    
    ligar(): void{
        console.log(`A moto ${this.marca} ${this.modelo} está ligado`);
    }

    desligar(): void{
        console.log(`A moto ${this.marca} ${this.modelo} está desligado`);
    }
}

//Teste
const carro = new Carro ('Toyota', 'Corolla');
carro.ligar();
carro.desligar();

const moto = new Moto ('Honda', 'CG 160 ');
moto.ligar();
moto.desligar();

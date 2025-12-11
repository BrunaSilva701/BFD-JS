interface IAparelho{
    ligar():void;
    desligar():void;
}

class Televisao implements IAparelho{
    constructor(public marca:string){}

    ligar():void{
        console.log(`A televisão ${this.marca} está ligada`);
    }

    desligar(): void{
        console.log(`A televisão ${this.marca} está desligada`);
    }
}

class Celular implements IAparelho{
    constructor(public marca:string){}

    ligar():void{
        console.log(`O celular ${this.marca} está ligado`);
    }

     desligar(): void{
        console.log(`O celular ${this.marca} está desligado`);
    }
}

//Teste
const televisao = new Televisao ('Samsung');
televisao.ligar();
televisao.desligar();

const celular = new Celular ('Apple');
celular.ligar();
celular.desligar();

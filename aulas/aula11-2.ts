//POO - ENDEREÇO

class Endereco{
    rua: string;
    numero: number;
    cidade: string;
    
    constructor(rua:string, numero:number, cidade:string){
        this.rua = rua //this = referência ao objeto atual, seus atributos e metodo
        this.numero = numero
        this.cidade = cidade
    }

    formatar():void{
        console.log (`Rua ${this.rua}, N°${this.numero} - ${this.cidade}`);
    }
}

const endreco1 = new Endereco ('das Flores', 10, 'Jaguaraga');
const endreco2 = new Endereco ('Tupinambas', 15, 'São Luis');

console.log(endreco1.formatar());
console.log(endreco2.formatar());
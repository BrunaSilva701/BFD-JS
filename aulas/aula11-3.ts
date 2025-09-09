// POO - PEDIDO

class pedido{
    id:string;
    total:number;

    constructor (id: string){
        this.id = id
        this.total = 0
    }

    adicionarValor (v:number): void{
        this.total += v
    }
}
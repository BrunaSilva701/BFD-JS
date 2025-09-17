class Funcionario{
    private _salario: number=0;

    constructor(public nome: string){}

    //Getter
    getSalario():number{
        return this.salario;
    }

    //Setter
    set salario(valor:number){
         if (valor <= 1518){
        console.log('O valor não é aceito');
        return
    }
    this.salario = valor
    }

    //Método
    exibirDados(): void{
        console.log(`O funcionario ${this.nome} recebe ${this.salario}: `)
    }
}

const f1 = new Funcionario('Alberto');
f1.salario = 1518;
f1.exibirDados();

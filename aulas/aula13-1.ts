class Funcionario{
   readonly id: number;
   public nome: string;
   private salario: number;

   constructor(id: number, nome: string, salario: number){
    this.id = id;
    this.nome = nome;
    this.salario = salario;
   }

   //Método aumentar salario
   aumentarSalario(valor: number): void{
    this.salario += valor;
    console.log(`Novo salário: ${this.salario}`)
   }

   //Método exibir nome e salário
   exibirFuncionario(): void{
    console.log(`Funcionario ${this.id}: ${this.nome} - Salário: ${this.salario}`)
   }
}

const f1 = new Funcionario (1,"José", 2500);
const f2 = new Funcionario (2,"Maria", 4500);
const f3 = new Funcionario (3,"Julia", 2000);

f1.aumentarSalario(200)
f2.aumentarSalario(500)
f3.aumentarSalario(400)

f1.exibirFuncionario();
f2.exibirFuncionario();
f3.exibirFuncionario();

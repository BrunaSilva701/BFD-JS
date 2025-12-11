class Cliente{
    public nome: string;
    readonly cpf: string;
    private senha: number;

    constructor(nome: string, cpf: string, senha: number){
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
    }

    //Método validar senha
    validarSenha(s:string): boolean{ //Recebe um parametro s do tipo string
        return this.senha === Number(s); // Converte 's' para número antes de comparar(senha é um number)
    }

    exibirCliente(): void{
        console.log(`Cliente: ${this.nome} - CPF: ${this.cpf}`);
    }
}

const c1 = new Cliente ('Bruna', '111.040.565-90', 1245)
c1.exibirCliente();

//Passa a senha em string para ser convertidada para número e validar
c1.validarSenha('1245');


class Client{
    nome: string;
    cpf: string;

    constructor (nome: string, cpf: string){
        this.nome = nome;
        this.cpf = cpf;
    }

    exibirSaudar():void{
        console.log(`Olá, ${this.nome}! Seu CPF é ${this.cpf}`);
    }
}

const cliente1 = new Client ("José", "121.834.433-09")
const cliente2 = new Client ("Clara", "111.784.543-27")

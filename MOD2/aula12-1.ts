class Alunos {
    nome: string;
    matricula: string;

    constructor (nome: string, matricula: string){
        this.nome = nome;
        this.matricula = matricula
    }

    //Método exibir - Mostra os alunos e suas matriculas
    exibir(): void{
        console.log(`Olá ${this.nome}! Sua matricula é ${this.matricula}`)
    }
} 

class Turma {
    //Lista de alunos
    alunos: Alunos [] = []; //Chama a classe alunos

    //Método para adiconar alunos na lista
    adicionarAlunos(alunos: Alunos): void{
        this.alunos.push(alunos);
        console.log(`${alunos.nome} adicionado!`)
    }

    //Método que mostra todos os alunos da turma
    listarAlunos(): void {
        for(const alunos of this.alunos) //chama a lista
        alunos.exibir();
    }
}

const aluno1 = new Alunos ('Julianne', '01832048')
const aluno2 = new Alunos ('Taís', '01832048')
const aluno3 = new Alunos ('Matheus', '01832048')

//Adicionar alunos
const turma = new Turma()
turma.adicionarAlunos (aluno1);
turma.adicionarAlunos (aluno2);
turma.adicionarAlunos (aluno3);

//Exibir alunos
turma.listarAlunos();

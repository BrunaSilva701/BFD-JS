class Aluno{
    private _nota: number=0;

    get nota(): number{
        return this.nota;
    }

    set nota(valor:number){
        if (valor >=0 && valor <= 10 ){
            console.log('Valor aceito');
        }
        this.nota=valor;
    }
}

const a1 = new Aluno;
a1.nota = (1);

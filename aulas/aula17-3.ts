class Automovel{
    private _velocidade: number=0;

    get velocidade(): number{
        return this.velocidade;
    }

    set velocidade(velocidade:number){
        if (velocidade >= 30 && velocidade <= 200){
            this.acelerar(); //Invoca o método acelerar
        }if (velocidade =0){
            this.velocidade = velocidade
            this.frear();
        }
    }

    //Método (até 200km)
    acelerar(): void{
        console.log('Está acelerando')
    }

    //Método (nunca abaixo de 0km)
    frear(): void{
        console.log('Está freiando')
    }
}

const c1 = new Automovel;
c1.velocidade = (0);
c1.acelerar();
c1.frear();

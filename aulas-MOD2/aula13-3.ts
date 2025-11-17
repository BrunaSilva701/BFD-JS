class Veiculo{
    marca: string;
    modelo: string;
    ano: number;
    private placa: string;

    constructor(marca: string, modelo:string, ano:number, placa:string){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.placa = placa;
    }

    exibirDados(): void{
        console.log(`${this.marca} - ${this.modelo} - ${this.ano} - ${this.placa}`)
    }
}

const carro1 = new Veiculo ('Fiat', 'Fiat Argo', 2010, 'ABC234');
const carro2 = new Veiculo ('Volkswagen', 'Volkswagen Polo', 2020, 'ABC136');
const carro3 = new Veiculo ('Hyundai', 'Hyundai Creta', 2017, 'ABC957');
const carro4 = new Veiculo ('Volkswagen', 'Volkswagen T-Cross', 2025, 'ABC067');

carro1.exibirDados();
carro2.exibirDados();
carro3.exibirDados();
carro4.exibirDados();

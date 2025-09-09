//POO - ENDEREÇO
var Endereco = /** @class */ (function () {
    function Endereco(rua, numero, cidade) {
        this.rua = rua; //this = referência ao objeto atual, seus atributos e metodo
        this.numero = numero;
        this.cidade = cidade;
    }
    Endereco.prototype.formatar = function () {
        console.log("Rua ".concat(this.rua, ", N\u00B0").concat(this.numero, " - ").concat(this.cidade));
    };
    return Endereco;
}());
var endreco1 = new Endereco('das Flores', 10, 'Jaguaraga');
var endreco2 = new Endereco('Tupinambas', 15, 'São Luis');

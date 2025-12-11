class CadatroUsuario{
    registar(nome:string, senha: string): void{
        if(senha.length <6){
            throw new Error ('Senha curta. A senha deve ter mais de 6 caracteres');
        }
        console.log('usuario ${this.nome} registrado com sucesso!');
    }
}

try{
    const cadastro = new CadatroUsuario();
    cadastro.registar('João', '123');
}catch (erro){
    console.log('Error: ', (erro as Error).message);
}

try{
    const cadastro = new CadatroUsuario();
    cadastro.registar('Maria', 'abc123');
}catch (erro){
    console.log('Erro: ', (erro as Error).message);
}

class Produto{
    //Método
    setPreco(valor: number): void{
        if(valor <= 0){
            throw new Error('Valor abaixo do esperado.')
        }
        console.log('Valor cadastrado!')
    }   
}

try{
    const produto = new Produto();
    produto.setPreco(0);
}catch(erro){
    console.log('Error: ', (erro as Error).message);
}

try{
    const produto = new Produto();
    produto.setPreco(10);
}catch(erro){
    console.log('Error: ', (erro as Error).message);
}

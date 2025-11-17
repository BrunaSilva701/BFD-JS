class Pedido{
    //Método
    finalizar(item: string):void{
        if(item === ''){
            throw new Error ('Pedido não pode ser finalizado sem itens');
        }
        console.log('Itens adicionados')
    }
}

try{
    const item = new Pedido();
    item.finalizar('');
}catch(erro){
    console.log('Error: ', (erro as Error).message);
}

try{
    const item = new Pedido();
    item.finalizar('Bola')
}catch(erro){
    console.log('Error: ', (erro as Error).message)
}

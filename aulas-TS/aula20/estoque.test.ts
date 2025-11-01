// Importar a classe Estoque
import { Estoque } from 'C:\Users\beatr\OneDrive\Área de Trabalho\Sistemas de informação\BFD-JS\aulas\aula20\classeEstoque.ts';

describe('Teste da classe Estoque', () => {
    // Teste 1: Adicionar produto 
    test('Deve adicionar produto corretamente', () => {
        const p = new Estoque('Caneta', 5);
        // Adiconar 5 unidades
        p.adicionarProduto(5);
        // Verificar se a quantidade vai ser 10
        expect(p.quantidade).toBe(10); 
    });

    // Teste 2: Adicionar quantidade inválida (Cenário de Erro)
    test('Deve lançar erro ao adicionar quantidade invalida', () => {
        const p = new Estoque('Caneta', 5);
            //Verificar se o valor é inválido
            expect(() => p.adicionarProduto(-3)).toThrow('Quantidade inválida'); 
        });

    // Teste 3: Remover produto (Cenário de Sucesso)
    test('Deve remover produto corretamente', () => {
        const p = new Estoque('Caneta', 5);
            p.registrarSaida(2);
            expect(p.quantidade).toBe(3);
        });

    // Verificar o erro de saída!
    test('Deve lançar erro ao tentar remover mais do que o disponível', () => {
        const p = new Estoque('Caneta', 5);
            // Tenta remover 10 de 5 e verifica se o erro é lançado
            expect(() => p.registrarSaida(10)).toThrow('Estoque insuficiente');
        });
});
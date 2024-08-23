import exercicio1 from "../src/1-Resultado-de-uma-venda"

describe("Exercicio 1 - Resultado de uma venda", () => {
    test("Deve retornar prejuizo quando o valor de compra for maior que o de venda", () => {
        const resultado = exercicio1(500, 400)
        expect(resultado).toBe("O valor do prejuízo é 100")
    })
    test("Deve retornar lucro quando o valor de venda for maior que o de compra", () => {
        const resultado = exercicio1(300, 450)
        expect(resultado).toBe('O valor do lucro é 150')
    })
    test("Deve retornar venda a preço de custo quando os valores de compra e venda forem iguais", () => {
        const resultado = exercicio1(350, 350)
        expect(resultado).toBe("Venda a preço de custo")
    })
})


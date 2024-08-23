import exercicio2 from "../src/2-Checagem-de-senha"

describe("Exercicio 2 - Checagem de senha", () => {
    test("Deve retornar 'Senha inválida' quando a senha for menor que 4 caracteres", () => {
        const resultado = exercicio2("657")
        expect(resultado).toBe("Senha inválida")
    })
    test("Deve retornar 'Senha válida' quando a senha tiver 4 ou mais caracteres numéricos", () => {
        const resultado = exercicio2("1234")
        expect(resultado).toBe("Senha válida")
    })

    test("Deve retornar 'Senha inválida' quando a senha contiver caracteres não numéricos", () => {
        const resultado = exercicio2("12a34")
        expect(resultado).toBe("Senha inválida")
    })

    test("Deve retornar 'Senha inválida' quando a senha for uma string vazia", () => {
        const resultado = exercicio2("")
        expect(resultado).toBe("Senha inválida")
    })

    test("Deve retornar 'Senha válida' para uma senha longa apenas com números", () => {
        const resultado = exercicio2("123456789")
        expect(resultado).toBe("Senha válida")
    })

    test("Deve retornar 'Senha inválida' para uma senha com espaços", () => {
        const resultado = exercicio2("12 34")
        expect(resultado).toBe("Senha inválida")
    })
})





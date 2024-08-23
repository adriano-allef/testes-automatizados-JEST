import Exercicio3 from "../src/3-Validar-envio-dos-dados-de-cadastro"

describe("Exercicio 3", () => {
    test("Deve retornar 'Todos os campos são obrigatórios' se algum campo estiver vazio", () => {
        const dadosCadastro = {
            nome: "",
            email: "",
            senha: ""
        }
        const resultado = Exercicio3(dadosCadastro)
        expect(resultado).toBe("Todos os campos são obrigatórios")
    })
    test("Deve retornar 'Cadastro realizado com sucesso!' se todos os campos estiverem preenchidos", () => {
        const dadosCadastro = {
            nome: "João",
            email: "joao@example.com",
            senha: "senha123"
        }
        const resultado = Exercicio3(dadosCadastro)
        expect(resultado).toBe("Cadastro realizado com sucesso!")
    })
    test("Deve retornar Todos os campos são obrigatórios se o nome estiver vazio", () => {
        const dadosCadastro = {
            nome: "",
            email: "joao@example.com",
            senha: "senha123"
        }
        const resultado = Exercicio3(dadosCadastro)
        expect(resultado).toBe("Todos os campos são obrigatórios")
    })
    test("Deve retornar Todos os campos são obrigatórios se o email estiver vazio", () => {
        const dadosCadastro = {
            nome: "João",
            email: "",
            senha: "senha123"
        }
        const resultado = Exercicio3(dadosCadastro)
        expect(resultado).toBe("Todos os campos são obrigatórios")
    })
    test("Deve retornar Todos os campos são obrigatórios se a senha estiver vazia", () => {
        const dadosCadastro = {
            nome: "João",
            email: "joao@example.com",
            senha: ""
        }
        const resultado = Exercicio3(dadosCadastro)
        expect(resultado).toBe("Todos os campos são obrigatórios")
    })
})

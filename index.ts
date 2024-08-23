// Exercicio 3

type DadosCadastro = {
    nome:string
    email:string
    senha:string
}
const dadosCadastro: DadosCadastro = {
    nome: "",
    email: "",
    senha: "",
}

if(dadosCadastro.nome.trim() === "" || dadosCadastro.email.trim() === "" || dadosCadastro.senha.trim() === "") {
    console.log("Todos os campos são obrigatórios")
} else {
    console.log("Cadastro realizado com sucesso!")
}
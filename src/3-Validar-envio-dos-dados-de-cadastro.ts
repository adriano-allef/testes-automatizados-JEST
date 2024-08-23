type DadosCadastro = {
    nome: string;
    email: string;
    senha: string;
}

export default function validarEnvioDadosCadastro (dadosCadastro: DadosCadastro) {
    if(dadosCadastro.nome.trim() === "" || dadosCadastro.email.trim() === "" || dadosCadastro.senha.trim() === "") {
        return "Todos os campos são obrigatórios"
    } else {
        return "Cadastro realizado com sucesso!"
    }
}
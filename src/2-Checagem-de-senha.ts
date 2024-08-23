export default function checagemDeSenha(senha: string) {

    const senhaNumerica = Number(senha)
    
    if(isNaN(senhaNumerica) || senha.length <= 3 || senha.trim() === "") {
        return "Senha inválida";
    } else {
        return "Senha válida";
    }
}
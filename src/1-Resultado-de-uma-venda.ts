export default function exercicio1(compra: number, venda: number) {
    if (compra < venda) {
        return `O valor do lucro é ${venda - compra}`
    } else if (compra > venda) {
        return `O valor do prejuízo é ${compra - venda}`
    } else {
        return "Venda a preço de custo"
    }
}
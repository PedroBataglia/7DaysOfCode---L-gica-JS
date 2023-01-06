const nome = prompt('Qual seu nome?');
const idade = prompt('Qual sua idade?');
const ling = prompt('Qual linguagem de programação você está estudando?')

alert(`Seu nome é ${nome}, você tem ${idade} anos e está estudando ${ling}, meus parabens.`);

const resp = prompt(`Você gosta de estudar ${ling}? Responda com 1 para SIM e 2 para NÃO.`)

if (resp == '1') {
    alert('Muito bom! Continue estudando e você terá muito sucesso.')
} else {
    alert('Ah que pena... Já tentou aprender outra linguagem?')
}


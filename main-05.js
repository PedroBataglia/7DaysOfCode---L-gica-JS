let continueVar = true;
let resposta = '';
let adicionarCompra = '';
let tipoDeCompra = '';
const listaLimpeza = [];
const listaFrutas = [];
const listaComida = [];
const listaDoces = [];

while (continueVar != false) {
    resposta = prompt('Você deseja continuar? [S/N]');
    if(resposta == 'N') {
        break
    } else {
        ''
    }

    adicionarCompra = prompt('Qual produto você gostaria de adicionar?');
    tipoDeCompra = prompt('Em qual lista esse produto deve ser adicionado? [1]Limpeza - [2]Frutas - [3]Comida - [4]Doces');

    switch (tipoDeCompra) {
        case '1':
            listaLimpeza.push(adicionarCompra);
            break;
        case '2':
            listaFrutas.push(adicionarCompra);
            break;
        case '3':
            listaComida.push(adicionarCompra);
            break;
        case '4':
            listaDoces.push(adicionarCompra);
            break;
    }

}

console.log(`Lista de Limpeza: ${listaLimpeza}`);
console.log(`Lista de Frutas: ${listaFrutas}`);
console.log(`Lista de Comida: ${listaComida}`);
console.log(`Lista de Doces: ${listaDoces}`);
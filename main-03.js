let escolhaCarreira = "";
let escolhaLinguagem = "";
let escolhaCarreiraFutura = "";
let tecnologia = "";
let gostariaContinuar = "";

escolhaCarreira = prompt('Escolha entre Front-end [0] ou Back-end [1]');


if ( escolhaCarreira == 0) {
    escolhaLinguagem = prompt('Você prefere estudar React ou Vae?');
} else {
    escolhaLinguagem = prompt('Você prefere estudar C# ou Java?');
}   

escolhaCarreiraFutura = prompt('Gostaria de continuar na área ou se tornar full stack?')

while ( gostariaContinuar !== 'N') 
{
     tecnologia = prompt('Qual tecnologia você gostaria de aprender agora?')
     gostariaContinuar = prompt('quer adicionar outra tecnologia? (S/N)')
}
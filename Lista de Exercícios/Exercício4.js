//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
const prompt = require('prompt-sync')()
let Opção
do{//loop enquanto Opção é diferente de 0
    Opção = Number(prompt("Escolha uma opção:(1):entra na primeira opção; (3):entra na segunda opção; (2):entra na terceira opção; (0): sair do programa "))//Pede uma opção ao usuario
    switch(Opção){
    case 1:
        console.log("Primeira opção")
        break
    case 2:
        console.log("Segunda opção")
        break
    case 3:
        console.log("Terceira opção")
        break
    case 0:
        console.log("Fim do programa")
        break
    default:
        console.log("Opção inválida!");
        break;
}
}while(Opção !== 0)

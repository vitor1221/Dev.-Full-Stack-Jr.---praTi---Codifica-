//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
const prompt = require('prompt-sync')()

let maça = Number(prompt("Insira o numero de maças desejadas: "))//
let conta
if(maça >= 12){// verifica se o numero de maças é mair igual a 12
    conta = maça * 0.25
    console.log('o valor da compra de maças é: ', conta.toFixed(2))
} else{
    conta = maça *0.30
    console.log('o valor da compra de maças é: R$', conta.toFixed(2),'')
}